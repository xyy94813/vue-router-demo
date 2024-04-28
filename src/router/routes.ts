import { h } from 'vue'
import HomeView from '../views/HomeView.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/dynamic/:id',
    name: 'dynamic',
    component: () => import(/*** webpackChunkName: "dynamic-page" ***/ '../views/DynamicView.vue')
  },
  {
    path: '/dynamic/custom-:id(\\d+)',
    name: 'dynamic sub id',
    component: () => import(/*** webpackChunkName: "dynamic-page" ***/ '../views/DynamicView.vue')
  },
  {
    path: '/dynamic/:id(\\d+)',
    name: 'dynamic number id',
    component: () => import(/*** webpackChunkName: "dynamic-page" ***/ '../views/DynamicView.vue')
  },
  {
    path: '/optional/:id?',
    name: 'optional params',
    component: () => import(/*** webpackChunkName: "dynamic-page" ***/ '../views/DynamicView.vue')
  },
  {
    path: '/repeat/:dir*',
    name: 'repeat *',
    component: () => import(/*** webpackChunkName: "dynamic-page" ***/ '../views/DynamicView.vue')
  },
  {
    path: '/repeat/:dir+',
    name: 'repeat +',
    component: () => import(/*** webpackChunkName: "dynamic-page" ***/ '../views/DynamicView.vue')
  },
  {
    path: '/sensitive',
    name: 'sensitive upper-lower',
    sensitive: true,
    component: () => import(/*** webpackChunkName: "dynamic-page" ***/ '../views/DynamicView.vue')
  },
  {
    path: '/strict',
    name: 'strict slash',
    strict: true,
    component: () => import(/*** webpackChunkName: "dynamic-page" ***/ '../views/DynamicView.vue')
  },
  {
    path: '/sub-routes',
    name: 'sub routes',
    component: () =>
      import(/*** webpackChunkName: "nested-router-view" ***/ '../views/NestedRouterView.vue'),
    children: [
      {
        path: 'dynamic',
        name: 'dynamic in sub routes',
        component: () =>
          import(/*** webpackChunkName: "dynamic-page" ***/ '../views/DynamicView.vue')
      }
    ]
  },
  {
    path: '/omitting-parent-components',
    name: 'Omitting parent components',
    children: [
      {
        path: 'dynamic',
        name: 'dynamic in omitting parent components',
        component: () =>
          import(/*** webpackChunkName: "dynamic-page" ***/ '../views/DynamicView.vue')
      }
    ]
  },
  {
    path: '/named-views',
    name: 'Named Nested Router View',
    component: () =>
      import(
        /*** webpackChunkName: "named-nested-router-view" ***/ '../views/NamedNestedRouterView.vue'
      ),
    children: [
      {
        path: '',
        components: {
          default: () => h('h3', 'default'),
          Before: () => h('h3', 'Before'),
          After: () => h('h3', 'after')
          // they match the `name` attribute on `<router-view>`
        }
      }
    ]
  },
  {
    path: '/alias',
    children: [
      {
        path: '',
        component: () =>
          import(/*** webpackChunkName: "dynamic-page" ***/ '../views/DynamicView.vue'),
        alias: ['index', '/aliasA', ':id(\\d+)']
      }
    ]
  },
  {
    path: '/redirect-to-about',
    redirect: '/about'
  },
  {
    path: '/redirect-to-about-with-query-:id',
    redirect: (to: any) => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { path: '/about', query: { q: to.params.id } }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/*** webpackChunkName: "404" ***/ '../views/NotFoundView.vue')
  }
]
