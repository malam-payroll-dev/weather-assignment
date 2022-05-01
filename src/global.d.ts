import 'vue-router'
import { routeNames } from '@/router'
import { filters } from '@/core/filters'

/* eslint-disable */
declare module 'vue-router' {
  interface RouteMeta {

  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $routeNames: typeof routeNames
    $filters: typeof filters
  }
}

declare global {
  interface Storage {
    hasKey(key: string): boolean;

    setItem(key: string, value: any): void;
  }
}
