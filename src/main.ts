import './core/utils/global-prototypes.utils'

import { createApp } from 'vue'
import App from '@/App.vue'

import { router } from '@/router'
import { VueGlobalPrototypesPlugin } from '@/plugins'

import '@/assets/styles/main.scss'
import './registerServiceWorker'

const app = createApp(App)
app
  .use(router)
  .use(VueGlobalPrototypesPlugin)

router.isReady().then(() => {
  app.mount('#app')
})

export {
  app
}
