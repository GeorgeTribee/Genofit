import { VercelRequest, VercelResponse } from '@vercel/node';
import { stripe } from './lib/stripe';
import { supabase } from './lib/supabase';
import Stripe from 'stripe';

// Vercel requires raw body for webhook signature verification
export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(req: VercelRequest): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];

  if (!sig) {
    return res.status(400).json({ error: 'Missing stripe-signature header' });
  }

  let event: Stripe.Event;

  try {
    // Get raw body
    const rawBody = await buffer(req);

    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return res.status(400).json({
      error: 'Webhook signature verification failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        // Update order status to completed
        const { error: updateError } = await supabase
          .from('orders')
          .update({
            status: 'completed',
            completed_at: new Date().toISOString(),
            stripe_payment_intent_id: session.payment_intent as string,
            metadata: {
              stripe_session: session,
            },
          })
          .eq('stripe_session_id', session.id);

        if (updateError) {
          console.error('Failed to update order:', updateError);
          // Don't return error - Stripe will retry
        }

        console.log(`Order completed for session: ${session.id}`);

        // TODO: Send confirmation email here
        // Example: await sendConfirmationEmail(session.customer_email, orderDetails);

        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session;

        // Update order status to expired
        const { error: updateError } = await supabase
          .from('orders')
          .update({
            status: 'expired',
          })
          .eq('stripe_session_id', session.id);

        if (updateError) {
          console.error('Failed to update expired order:', updateError);
        }

        console.log(`Order expired for session: ${session.id}`);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        // Update order status to failed
        const { error: updateError } = await supabase
          .from('orders')
          .update({
            status: 'failed',
          })
          .eq('stripe_payment_intent_id', paymentIntent.id);

        if (updateError) {
          console.error('Failed to update failed order:', updateError);
        }

        console.log(`Payment failed: ${paymentIntent.id}`);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Return success to Stripe
    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return res.status(500).json({
      error: 'Webhook handler failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
