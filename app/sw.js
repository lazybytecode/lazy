const CACHE_NAME = "app-v12"; // 🔥 incrementa versão

const ASSETS = [
  "/",
];

// 🚀 install
self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// 🧹 activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

// 🌐 fetch strategy
self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  // 🚫 1. IGNORA qualquer coisa que não seja GET (resolve seu erro)
  if (request.method !== "GET") {
    return;
  }

  // 🚫 2. NÃO intercepta sua API (principalmente POST /themes)
  if (url.pathname.startsWith("/api/")) {
    return;
  }

  // 🚫 3. NÃO cachear módulos dinâmicos
  if (
    url.pathname.startsWith("/views/") ||
    url.pathname.startsWith("/js/")
  ) {
    return;
  }

  // ✅ 4. estratégia: network-first + fallback cache
  event.respondWith(
    fetch(request)
      .then(response => {
        // 🔒 só cacheia respostas válidas
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        const clone = response.clone();

        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, clone);
        });

        return response;
      })
      .catch(() => {
        return caches.match(request)
          .then(res => res || caches.match("/"));
      })
  );
});