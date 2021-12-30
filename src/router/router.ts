import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CesiumView from "../views/CesiumView.vue";
import DynamiceRouteView from "@/views/DynamicRouteView.vue";
import VueView from "../views/VueView.vue";

//https://router.vuejs.org/guide/essentials/passing-props.html
const User = {
  props: ["routerProp", "routerProp2"],
  template: "<div>User {{ id }}</div>",
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/cesium",
    name: "CesiumView",
    component: CesiumView,
  },
  {
    path: "/compositionAPI",
    name: "CompositionAPIView",
    component: () =>
      import(
        /* webpackChunkName: "TypescriptView" */ "../views/CompositionAPIView.vue"
      ),
  },
  {
    path: "/dynamiceRouteView/:routerProp/:routerProp2",
    name: "DynamiceRouteView",
    component: DynamiceRouteView,
    props: true,
    beforeEnter(routeTo: any, routeFrom: any, next: Function) {
      console.log("Route enter hook");
      next();
    },
  },
  {
    path: "/typescript",
    name: "TypescriptView",
    component: () =>
      import(
        /* webpackChunkName: "TypescriptView" */ "../views/TypescriptView.vue"
      ),
  },
  {
    path: "/vuetify",
    name: "VuetifyView",
    component: () =>
      import(/* webpackChunkName: "VuetifyView" */ "../views/VuetifyView.vue"),
  },
  {
    path: "/",
    name: "VueView",
    component: VueView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((routeTo, routeFrom, next) => {
  if (routeTo.path == routeFrom.path) {
    console.log("vue-router: navigation to the same path stopped");
    return;
  }
  console.log(`vue-router: from ${routeFrom.path} to ${routeTo.path}`);
  next();
});

router.afterEach(() => {
  //console.log("After each route triggered");
});

export default router;
