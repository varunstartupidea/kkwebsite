/**
 * Formspree endpoint for contact form.
 * Set NEXT_PUBLIC_FORMSPREE_ID in .env.local to your Formspree form ID,
 * or replace the default with your form endpoint for static deploy.
 */
function getFormspreeEndpoint(): string {
  if (typeof process.env.NEXT_PUBLIC_FORMSPREE_ID === 'string' && process.env.NEXT_PUBLIC_FORMSPREE_ID) {
    return `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`;
  }
  return 'https://formspree.io/f/xjvnqkzw';
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(payload: ContactPayload): Promise<{ ok: boolean; error?: string }> {
  const endpoint = getFormspreeEndpoint();
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || `Request failed: ${res.status}` };
    }
    return { ok: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Network error';
    return { ok: false, error: message };
  }
}
