<template>
  <div class="home">
    <h1>All Destinations</h1>
    <p><button @click="triggerRouterError">Trigger Router Error</button></p>
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
  },
};
</script>
