if (
  typeof window !== "undefined" &&
  typeof navigator !== "undefined" &&
  "serviceWorker" in navigator
) {
  navigator.serviceWorker.ready.then((registration) => {
    registration.unregister()
    window.location.reload()
  })
}
