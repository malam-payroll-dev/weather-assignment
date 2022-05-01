import { register } from 'register-service-worker'
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  let refreshing = false
  register(`${process.env.BASE_URL}service-worker.js`, {
    async updated (registration) {
      console.log('New content is available; please refresh.')
      if (registration && registration.waiting) {
        if (window.confirm('Do you really want to leave?')) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' })
        }
      }
    }
  })
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    // We'll also need to add 'refreshing' to our data originally set to false.
    if (refreshing) return
    refreshing = true
    // Here the actual reload of the page occurs
    window.location.reload()
  })
}
