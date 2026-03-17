/**
 * Google Analytics 4 (GA4) initialization.
 * Loads only when VITE_GA_ID is set in .env.
 */
const GA_ID = import.meta.env.VITE_GA_ID;

if (GA_ID) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', GA_ID);
}
