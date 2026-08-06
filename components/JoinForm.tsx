'use client';

/** Demo membership form — wire the submit handler to your inbox or CRM when ready. */
export default function JoinForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid" style={{ gap: 12 }}>
      <input type="text" className="field" placeholder="Name" aria-label="Name" />
      <input type="email" className="field" placeholder="Email" aria-label="Email" />
      <select className="field" aria-label="I am a…" defaultValue="studio">
        <option value="studio">I&apos;m a studio wanting to join</option>
        <option value="developer">I&apos;m a developer / creator</option>
        <option value="investor">I&apos;m an investor or partner</option>
        <option value="press">Press / media</option>
        <option value="other">Something else</option>
      </select>
      <textarea className="field" placeholder="A line about you (optional)" aria-label="Message" rows={3} />
      <button className="btn btn--primary" type="submit" style={{ justifyContent: 'center' }}>
        Send it through
      </button>
    </form>
  );
}
