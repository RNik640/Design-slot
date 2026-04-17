self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("slot-cache").then(cache=>{
      return cache.addAll(["./"]);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});
