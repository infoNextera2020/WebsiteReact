// Some static hosts serve the root HTML for extensionless URLs. Select the
// matching entry before loading styles so each landing page stays isolated.
const pathname = window.location.pathname.replace(/\/$/, '');

function setLandingMetadata(title: string) {
  document.title = title;
  const description = "Launch your tech career in two years with NextEra Education's project-based 01 Coding Academy in Egypt.";
  for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
    document.querySelector(selector)?.setAttribute('content', title);
  }
  for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
    document.querySelector(selector)?.setAttribute('content', description);
  }
  const url = `https://nexteraeducation.net${pathname}/`;
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = url;
  document.head.appendChild(canonical);
  document.querySelector('link[rel="icon"]')?.setAttribute('href', `${pathname}/nextera-logo.png`);
}

if (pathname === '/academy-landing') {
  window.location.replace(`/academy-01${window.location.search}${window.location.hash}`);
} else if (pathname === '/academy-01') {
  setLandingMetadata('NextEra Education | 01 Coding Academy Egypt');
  void import('./landing-pages/academy-01/main');
} else if (pathname === '/vip') {
  setLandingMetadata('NextEra Education | VIP Coding Academy');
  void import('./landing-pages/vip/main');
} else {
  void import('./main-site');
}
