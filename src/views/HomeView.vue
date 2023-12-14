<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="buttons">
      <button @click="triggerRouterError">Trigger Router Error</button>
      <button @click="addDynamicRoute">Add Dynamic Route</button>
      <router-link to="/dynamic">Visit Dynamic Route</router-link>
    </div>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.view',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import sourceData from "@/data.json";
import { isNavigationFailure, NavigationFailureType } from "vue-router";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
  methods: {
    async triggerRouterError() {
      const navigationFailure = await this.$router.push("/");

      if (
        isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)
      ) {
        //false was returned inside of a navigation guard to the navigation
        console.log(navigationFailure.to);
        console.log(navigationFailure.from);
      } else {
        //all is allright
      }
    },
    addDynamicRoute() {
      this.$router.addRoute({
        name: "dynamic",
        path: "/dynamic",
        component: () => import("@/views/LoginView.vue"),
      });

      //this.$router.removeRoute("dynamic");
    },
  },
};
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 1rem;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .buttons {
    width: 100%;
  }
}

@media screen and (max-width: 767px) {
  .buttons {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .buttons > a {
    align-self: center;
  }

  h1 {
    text-align: center;
  }
}
</style>
