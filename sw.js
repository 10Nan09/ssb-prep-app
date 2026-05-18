const CACHE_NAME = 'ssb-prep-v1';
const urlsToCache = [
  '/login.html',
  '/index.html',
  '/pages/dashboard.html',
  '/pages/test.html',
  '/pages/practice.html',
  '/pages/ssb_report_card.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
