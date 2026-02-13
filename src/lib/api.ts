interface CreateCheckoutRequest {
  courseId: string;
  customerEmail: string;
  customerFirstName?: string;
  customerLastName?: string;
  customerPhone?: string;
  customAmount?: number;
}

interface CreateCheckoutResponse {
  sessionId: string;
  url: string;
}

export async function createCheckoutSession(
  data: CreateCheckoutRequest
): Promise<CreateCheckoutResponse> {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    try {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create checkout session');
    } catch {
      throw new Error('Server error. Please try again.');
    }
  }

  return response.json();
}
