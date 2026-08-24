'use server';

export type ContactFormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

const RECIPIENTS = [
  'andyksherrie@gmail.com',
  'eyram.tawia@gmail.com',
  'manteycaleb@gmail.com',
  'osemuix@gmail.com',
  'sebastian@letiarts.com',
];

const INTERESTS: Record<string, string> = {
  studio: 'Studio wanting to join',
  developer: 'Developer / creator',
  investor: 'Investor or partner',
  press: 'Press / media',
  other: 'Something else',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const interest = String(formData.get('interest') ?? 'other');
  const message = String(formData.get('message') ?? '').trim();
  const website = String(formData.get('website') ?? '').trim();

  // Bots commonly fill hidden fields. Return success without sending so the
  // form does not reveal that the submission was filtered.
  if (website) {
    return { status: 'success', message: 'Thanks — your message has been sent.' };
  }

  if (!name || name.length > 100) {
    return { status: 'error', message: 'Please enter your name.' };
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { status: 'error', message: 'Please enter a valid email address.' };
  }

  if (!(interest in INTERESTS)) {
    return { status: 'error', message: 'Please choose a valid enquiry type.' };
  }

  if (message.length > 3000) {
    return { status: 'error', message: 'Please keep your message under 3,000 characters.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error('Contact form email is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.');
    return {
      status: 'error',
      message: 'Email delivery is temporarily unavailable. Please try again later.',
    };
  }

  const interestLabel = INTERESTS[interest];
  const text = [
    'New enquiry from the GDAG website',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Enquiry type: ${interestLabel}`,
    '',
    'Message:',
    message || '(No message supplied)',
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'gdg-website/1.0',
      },
      body: JSON.stringify({
        from,
        to: RECIPIENTS,
        reply_to: email,
        subject: `GDAG website enquiry: ${interestLabel} — ${name}`,
        text,
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Resend rejected a contact form submission:', response.status, await response.text());
      return {
        status: 'error',
        message: 'We could not send your message. Please try again in a moment.',
      };
    }

    return { status: 'success', message: 'Thanks — your message has been sent.' };
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return {
      status: 'error',
      message: 'We could not send your message. Please try again in a moment.',
    };
  }
}
