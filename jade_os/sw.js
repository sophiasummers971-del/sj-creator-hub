// JADE Creator OS — Service Worker
// Caches the app shell so it works fully offline
// API calls (Idea Lab, Mirror, Inbox AI) still need internet

const CACHE = 'jade-os-v1';
const ASSETS = [
  '/index.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Bebas+Neue&family=DM+Sans:wght@200;300;400&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js'
];

// Install — cache everything
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      console.log('JADE OS: Caching app shell');
      // cache what we can, don't fail if CDN is slow
      return Promise.allSettled(ASSETS.map(url => cache.add(url).catch(() => {})));
    }).then(() => self.skipWaiting())
  );
});

// Activate — clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — serve from cache first, fall back to network
self.addEventListener('fetch', e => {
  // Always go network-first for API calls
  if(e.request.url.includes('anthropic.com') ||
     e.request.url.includes('googleapis.com/css') === false && e.request.url.includes('googleapis.com')) {
    return; // let browser handle API calls normally
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if(cached) return cached;
      return fetch(e.request).then(response => {
        // cache successful GET responses
        if(e.request.method === 'GET' && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, copy));
        }
        return response;
      }).catch(() => {
        // offline fallback — return cached index
        if(e.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
