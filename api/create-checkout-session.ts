import { VercelRequest, VercelResponse } from '@vercel/node';
import { stripe } from './lib/stripe';
import { supabase } from './lib/supabase';
import { CreateCheckoutRequest, CreateCheckoutResponse, Course } from './lib/types';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { courseId, courseName, courseDescription, customerEmail, customerFirstName, customerLastName, customerPhone, customAmount }: CreateCheckoutRequest = req.body;
    const customerName = [customerFirstName, customerLastName].filter(Boolean).join(' ');

    // Validate input
    if (!courseId || !customerEmail) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate custom amount
    if (customAmount === undefined || customAmount === null || isNaN(customAmount) || customAmount < 100) {
      return res.status(400).json({ error: 'Amount must be at least $100' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Try to get course from database; fall back to frontend-provided values
    let resolvedCourseName = courseName || 'Course';
    let resolvedCourseDescription = courseDescription || '';

    const { data: course } = await supabase
      .from('courses')
      .select('*')
      .eq('id', courseId)
      .single();

    if (course) {
      const typedCourse = course as Course;
      if (typedCourse.is_ended) {
        return res.status(400).json({ error: 'This course has ended and is no longer available' });
      }
      resolvedCourseName = typedCourse.title;
      resolvedCourseDescription = typedCourse.description;
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: Math.round(customAmount! * 100), // Convert to cents
            product_data: {
              name: resolvedCourseName,
              description: resolvedCourseDescription || undefined,
            },
          },
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      success_url: `${process.env.VITE_APP_URL || process.env.APP_URL || 'https://genofit.tech'}/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.VITE_APP_URL || process.env.APP_URL || 'https://genofit.tech'}/purchase/cancelled`,
      metadata: {
        courseId: courseId,
        customerName: customerName || '',
        customerPhone: customerPhone || '',
      },
    });

    // Create pending order in database
    const { error: orderError } = await supabase
      .from('orders')
      .insert({
        course_id: courseId,
        stripe_session_id: session.id,
        customer_email: customerEmail,
        customer_name: customerName,
        amount_total: customAmount,
        currency: 'usd',
        status: 'pending',
        metadata: {
          stripe_checkout_url: session.url,
          customer_phone: customerPhone || '',
        },
      });

    if (orderError) {
      console.error('Failed to create order:', orderError);
      // Continue anyway - we can recover from this
    }

    // Return session info
    const response: CreateCheckoutResponse = {
      sessionId: session.id,
      url: session.url!,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return res.status(500).json({
      error: 'Failed to create checkout session',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
