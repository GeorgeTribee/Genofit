export interface Course {
  id: string;
  title: string;
  description: string;
  price_usd: number;
  currency: string;
  is_ended: boolean;
  stripe_price_id?: string;
  metadata?: Record<string, any>;
  created_at?: string;
}

export interface Order {
  id: string;
  course_id: string;
  stripe_session_id: string;
  stripe_payment_intent_id?: string;
  customer_email: string;
  customer_name?: string;
  amount_total: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'expired';
  metadata?: Record<string, any>;
  created_at: string;
  completed_at?: string;
}

export interface CreateCheckoutRequest {
  courseId: string;
  customerEmail: string;
  customerFirstName?: string;
  customerLastName?: string;
  customerPhone?: string;
  customAmount?: number;
}

export interface CreateCheckoutResponse {
  sessionId: string;
  url: string;
}
