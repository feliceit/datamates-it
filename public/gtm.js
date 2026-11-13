(function (w, d) {
  const endpoint = "https://www.googletagmanager.com";
  const library = "gtm.js";
  const DEFAULT_STATE = 'denied';
  const consentModeKeys = [
    "ad_storage",
    "ad_user_data",
    "ad_personalization",
    "analytics_storage",
  ];
  const consentDefault = {
    ...Object.fromEntries(
      consentModeKeys.map((key) => [key, DEFAULT_STATE])
    ),
    "functionality_storage": "granted",
    "security_storage": "granted",
  }
  const id = d.currentScript?.dataset.gtmId;
  if (!id) return;
  w.dataLayer = w.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('consent', 'default', consentDefault);
  w.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });
  const url = new URL(library, endpoint);
  url.searchParams.set("id", id);
  const s = d.createElement("script");
  s.async = true;
  s.src = url.toString();
  d.head.appendChild(s);
})(window, document);
