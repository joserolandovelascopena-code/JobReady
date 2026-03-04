const STATIC_CACHE = "job-cache-v1";

// INSTALACIÓN
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll([
        "./",
        "index.html",
        "offline.html",
        "assets/css/app-css/styles.css",
        "pages/certificates.html",
        "pages/auth/login.html",
        "manifest.json",
        "assets/icons/icon-192.png",
        "assets/icons/icon-512.png",
      ]);
    }),
  );
  self.skipWaiting();
});

// ACTIVACIÓN
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE) {
            return caches.delete(key);
          }
        }),
      ),
    ),
  );
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", (event) => {
  const req = event.request;

  if (req.mode === "navigate") {
    event.respondWith(networkFirst(req));
    return;
  }

  event.respondWith(cacheFirst(req));
});

// NETWORK FIRST
async function networkFirst(req) {
  try {
    const networkRes = await fetch(req);
    return networkRes;
  } catch (err) {
    const cache = await caches.open(STATIC_CACHE);
    return (await cache.match(req)) || cache.match("offline.html");
  }
}

// CACHE FIRST
async function cacheFirst(req) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(req);

  if (cached) return cached;

  const networkRes = await fetch(req);

  // Guardar copia en caché
  cache.put(req, networkRes.clone());

  return networkRes;
}
