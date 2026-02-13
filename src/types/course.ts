export interface Course {
  id: string;
  title: string;
  description: string;
  price_usd: number;
  currency: string;
  is_ended: boolean;
  stripe_price_id?: string;
  metadata?: Record<string, any>;
}
