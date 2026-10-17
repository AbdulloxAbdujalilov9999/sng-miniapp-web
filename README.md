# SNG ONE Mini App

The Telegram Mini App for `@sngonebot`, deployed standalone on Vercel - deliberately separate from
the main platform (`sng-loadboard`, on Hetzner), so its design and deploys never touch that project.

- **Backend**: the same API and database as the main platform (`https://sng-pro.com`), called
  cross-origin - see `config.js`. The server allows this via `CORS_ORIGINS`
  (`sng-loadboard/deploy/compose.yaml`).
- **Auth**: Telegram-only, via `telegram-miniapp.js` (copied from the main repo's `web/js/` - pure
  plumbing, no UI coupling). `session-shim.js` is a small stand-in for the main site's own Session
  module, which this page doesn't need (no Google/email sign-in here).
- **No build step**: plain static files, deployed as-is.

## Keeping this in sync

`util.js`, `api.js`, and `telegram-miniapp.js` are copies of the same files in
`sng-loadboard/web/js/` - if the API's request/response shapes change there, re-copy them here too.
Everything else (`app.js`, `app.css`, `i18n.js`, `session-shim.js`, `index.html`) is specific to this
Mini App and lives only here.
