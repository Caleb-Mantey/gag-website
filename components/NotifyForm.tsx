'use client';

/** Demo signup form — wire the submit handler to your list provider when ready. */
export default function NotifyForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <input
        type="email"
        className="field field--pill"
        placeholder="you@studio.com"
        aria-label="Email address"
        style={{ flex: 1, minWidth: 220 }}
      />
      <button className="btn btn--primary" type="submit">
        Notify me
      </button>
    </form>
  );
}
