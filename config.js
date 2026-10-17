// This Mini App is a separate deployment (Vercel) from the API it talks to (sng-pro.com, on its own
// server) - apiBase must be absolute, not relative like the main site's own config.js, so every
// fetch() in api.js reaches the real backend instead of (nonexistent) API routes on this domain.
// The server allows this cross-origin via CORS_ORIGINS - see sng-loadboard/deploy/compose.yaml.
window.APP_CONFIG = {
  apiBase: 'https://sng-pro.com',
  pageSize: 50,
  maxRenderedRows: 600,
};
