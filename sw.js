const CACHE_NAME = 'fielding-cache-v1';

self.addEventListener('install', e => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', e => {
  // Permite que la app cargue los recursos
  e.respondWith(fetch(e.request));
});