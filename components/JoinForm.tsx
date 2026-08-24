'use client';

import { useActionState, useEffect, useRef } from 'react';

import { sendContactMessage } from '@/app/actions/contact';
import type { ContactFormState } from '@/app/actions/contact';

const initialContactFormState: ContactFormState = {
  status: 'idle',
  message: '',
};

export default function JoinForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialContactFormState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'success') formRef.current?.reset();
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="grid" style={{ gap: 12 }}>
      <input type="text" name="name" className="field" placeholder="Name" aria-label="Name" maxLength={100} required />
      <input type="email" name="email" className="field" placeholder="Email" aria-label="Email" maxLength={254} required />
      <select name="interest" className="field" aria-label="I am a…" defaultValue="studio">
        <option value="studio">I&apos;m a studio wanting to join</option>
        <option value="developer">I&apos;m a developer / creator</option>
        <option value="investor">I&apos;m an investor or partner</option>
        <option value="press">Press / media</option>
        <option value="other">Something else</option>
      </select>
      <textarea
        name="message"
        className="field"
        placeholder="A line about you (optional)"
        aria-label="Message"
        rows={3}
        maxLength={3000}
      />
      <input className="form-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn btn--primary" type="submit" disabled={pending} style={{ justifyContent: 'center' }}>
        {pending ? 'Sending…' : 'Send it through'}
      </button>
      {state.message && (
        <p className={`form-message form-message--${state.status}`} role={state.status === 'error' ? 'alert' : 'status'} aria-live="polite">
          {state.message}
        </p>
      )}
    </form>
  );
}
