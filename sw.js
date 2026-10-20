const C = "ndf-v2";
const ASSETS = ["./", "index.html", "manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

// Supprime les anciens caches (v1) : évite de servir une ancienne version de config.js
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== C).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// Réseau d'abord (en ignorant le cache HTTP) ; cache seulement les réponses valides ; secours hors ligne
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, { cache: "no-cache" })
      .then(r => {
        if (r.ok) {
          const copy = r.clone();
          caches.open(C).then(c => c.put(e.request, copy));
        }
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
