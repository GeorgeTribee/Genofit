interface CreateCheckoutRequest {
  courseId: string;
  courseName?: string;
  courseDescription?: string;
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
    let errorMessage = 'Failed to create checkout session';
    try {
      const error = await response.json();
      errorMessage = error.error || errorMessage;
    } catch {
      // Could not parse JSON error response
    }
    throw new Error(errorMessage);
  }

  return response.json();
}
