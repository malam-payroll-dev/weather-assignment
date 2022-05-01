import { createRouter, createWebHistory, RouteRecordRaw, onBeforeRouteUpdate, useRoute } from 'vue-router'

import { routeNames } from './route-names'
import { routeGuard } from './route-guard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: routeNames.rootPage,
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: routeNames.home,
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'favorites',
        name: routeNames.favorites,
        component: () => import('@/views/Favorites.vue')
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(routeGuard)

export {
  routeNames,
  routes,
  onBeforeRouteUpdate,
  useRoute
}
