import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
//import NotFoundView from "@/views/NotFoundView";
import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    alias: "/home",
  },
  {
    path: "/about",
    name: "about",
    components: {
      default: () => import("@/views/AboutView.vue"),
      FooterNavigation: () => import("@/components/FooterNavigation.vue"),
    },
    alias: "/about-us",
  },
  {
    path: "/imprint",
    name: "imprint",
    components: {
      default: () => import("@/views/ImprintView.vue"),
      FooterNavigation: () => import("@/components/FooterNavigation.vue"),
    },
  },
  {
    path: "/terms",
    name: "terms",
    components: {
      default: () => import("@/views/GeneralTermsView.vue"),
      FooterNavigation: () => import("@/components/FooterNavigation.vue"),
    },
  },
  {
    path: "/contact",
    name: "contact",
    components: {
      default: () => import("@/views/ContactView.vue"),
      FooterNavigation: () => import("@/components/FooterNavigation.vue"),
    },
  },
  {
    path: "/registration",
    name: "registration",
    components: {
      default: () => import("@/views/RegistrationView.vue"),
      FooterNavigation: () => import("@/components/FooterNavigation.vue"),
    },
  },
  {
    path: "/protected",
    name: "protected",
    components: {
      default: () => import("@/views/ProtectedView.vue"),
      LeftSidebar: () => import("@/components/LeftSidebar.vue"),
    },
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
    components: {
      default: () => import("@/views/InvoicesView.vue"),
      LeftSidebar: () => import("@/components/LeftSidebar.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/orders",
    name: "orders",
    components: {
      default: () => import("@/views/OrdersView.vue"),
      LeftSidebar: () => import("@/components/LeftSidebar.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/example/:id(\\d+)+",
    component: () => import("@/views/LoginView.vue"),
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
  if (to.meta.requiresAuth && (!window.user || !window.password)) {
    return { name: "login", query: { redirect: to.fullPath } };
  }
});

export default router;
