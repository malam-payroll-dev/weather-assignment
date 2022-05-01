import { Plugin } from 'vue'
import { routeNames } from '@/router'
import { filters } from '@/core/filters'

export const VueGlobalPrototypesPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$routeNames = routeNames
    app.config.globalProperties.$filters = filters
  }
}
