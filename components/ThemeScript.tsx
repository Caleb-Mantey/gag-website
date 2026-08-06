/**
 * Applies the stored theme to <html> before first paint so the page never
 * flashes the wrong palette. Must stay a blocking inline script.
 *
 * Light is the default for a first visit — the system's dark preference is
 * deliberately not followed, so the site always opens in its primary palette.
 * Once someone uses the toggle, their choice is what sticks.
 */
const script = `try{var t=localStorage.getItem('gag-theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light');}catch(e){}`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
