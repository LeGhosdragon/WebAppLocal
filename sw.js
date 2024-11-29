self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('game-cache-v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/images',
          '/script.js',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png'
        ]);
      }).catch(err => {
        console.error('Caching failed during install:', err);
      })
    );
  });
  