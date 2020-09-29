import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHome from '../views/VueHome.vue'
import ClassStyleHome from '../views/ClassStyleHome.vue'

Vue.use(VueRouter)

//https://router.vuejs.org/guide/essentials/passing-props.html
const User = {
  props: ['routerProp', 'routerProp2'],
  template: '<div>User {{ id }}</div>'
}


const routes = [
  {
    path: '/',
    name: 'VueHome',
    component: VueHome
  },
  {
    path: '/typescript',
    name: 'TypescriptHome',
    component: () => import(/* webpackChunkName: "TypescriptHome" */ '../views/TypescriptHome.vue')
  },
  {
    path: '/vuetify',
    name: 'VuetifyHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "VuetifyHome" */ '../views/VuetifyHome.vue')
  },
  {
    path: '/cesium',
    name: 'CesiumHome',
    component: () => import(/* webpackChunkName: "CesiumHome" */ '../views/CesiumHome.vue')
  },
  {
    path: '/classStyle/:routerProp/:routerProp2',
    name: 'ClassStyleHome',
    component: ClassStyleHome,
    props: true
  },
  {
    path: '/compositionAPI',
    name: 'CompositionAPIHome',
    component: () => import(/* webpackChunkName: "CompositionAPIHome" */ '../views/CompositionAPIHome.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
