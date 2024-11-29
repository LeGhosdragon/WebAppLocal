const CACHE_NAME = "game-cache-v1";
const urlsToCache = [
  "/images",
  "/index.html",
  "/images/greenCircle.jpg",
  "/images/greenCircle.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});