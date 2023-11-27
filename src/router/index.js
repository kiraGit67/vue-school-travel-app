import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
//import NotFoundView from "@/views/NotFoundView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.view",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/DestinationView.vue"),
    props: (route) => ({
      ...route.params,
      id: parseInt(route.params.id),
      slug: route.params.slug,
    }),
    children: [
      {
        path: ":experienceSlug",
        name: "experience.view",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/ExperienceView.vue"),
        props: (route) => ({
          ...route.params,
          id: parseInt(route.params.id),
          slug: route.params.experienceSlug,
        }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "vue-school-active-link",
});

export default router;
