/* MSE Trainer offline support: network first, cached copy when offline. Bump VERSION on every publish.
   Cache names MUST start with this app's PREFIX: all isaymotion apps share one origin and one cache storage,
   so activate deletes only this app's own old caches (v5 deleted every other cache on the origin; fixed in 6.0.0).
   Tagalog audio is not cached (it streams from Usap Tayo). */
const PREFIX = 'mse-trainer-';
const VERSION = PREFIX + '6.0.0';
const CORE = [
  './',
  './index.html',
  './css/app.css',
  './js/app.js',
  './js/data.js',
  './js/data-tl.js',
  './js/audio-key.js',
  './data/app-meta.js',
  './data/changelog.js',
  './data/hospital.js',
  './data/strings.js',
  './manifest.webmanifest',
  './favicon.ico',
  './icons/favicon-32.png',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];
self.addEventListener('install', (event) => {
  // add() one by one so a not-yet-uploaded icon cannot make the whole install fail
  event.waitUntil(caches.open(VERSION).then((c) => Promise.all(CORE.map((u) => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      // Only delete this app's own old caches: other study apps on isaymotion.github.io share this cache storage.
      .then((keys) => Promise.all(keys.filter((k) => k.indexOf(PREFIX) === 0 && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  const same = u.origin === location.origin, font = /fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if (!same && !font) return;   // Usap Tayo audio and its manifest go straight to the network
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
