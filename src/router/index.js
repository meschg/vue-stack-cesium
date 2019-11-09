import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHome from '../views/VueHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'vueHome',
    component: VueHome
  },
  {
    path: '/vuetify',
    name: 'vuetifyHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VuetifyHome.vue')
  },
  {
    path: '/cesium',
    name: 'cesiumHome',
    component: () => import(/* webpackChunkName: "about" */ '../views/CesiumHome.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
