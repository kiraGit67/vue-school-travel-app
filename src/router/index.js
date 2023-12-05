import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
//import NotFoundView from "@/views/NotFoundView";
import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/protected",
    name: "protected",
    component: () => import("@/views/ProtectedView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () => import("@/views/InvoicesView.vue"),
    meta: {
      requiresAuth: true,
    },
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
    beforeEnter(to, from) {
      const exists = sourceData.destinations.find(
        (destination) =>
          destination.id === parseInt(to.params.id) ||
          destination.id === parseInt(from.params.id)
      );

      if (!exists)
        return {
          name: "NotFound",
          params: {
            pathMatch: to.path.split("/").slice(1),
          },
          query: to.query,
          hash: to.hash,
        };
    },
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
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 300);
      })
    );
  },
  linkActiveClass: "vue-school-active-link",
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: "login", query: { redirect: to.fullPath } };
  }
});

export default router;
