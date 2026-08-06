/**
 * Applies the stored (or system) theme to <html> before first paint so the page
 * never flashes the wrong palette. Must stay a blocking inline script.
 */
const script = `try{var t=localStorage.getItem('gag-theme');if(t)document.documentElement.setAttribute('data-theme',t);else if(matchMedia('(prefers-color-scheme:dark)').matches)document.documentElement.setAttribute('data-theme','dark');}catch(e){}`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
