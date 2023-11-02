import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/brazil",
    name: "brazil",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "brazil" */ "@/views/BrazilView.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "@/views/HawaiiView.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "@/views/JamaicaView.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "panama" */ "@/views/PanamaView.vue"),
  },
  {
    path: "/destination/:id",
    component: () => import("@/views/DestinationView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "vue-school-active-link",
});

export default router;
