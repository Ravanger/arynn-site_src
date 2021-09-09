self.addEventListener("install", (e) => {
  self.skipWaiting()
})

self.addEventListener("activate", (e) => {
  // Remove previous service workers and cache
  self.registration
    .unregister()
    .then(() => {
      return self.clients.matchAll()
    })
    .then((clients) => {
      clients.forEach((client) => client.navigate(client.url))
    })
})
