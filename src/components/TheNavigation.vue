<template>
  <div id="nav">
    <router-link id="logo" to="/">Vue School Travel App</router-link>
    <div>
      <router-link to="/about">About Us</router-link>
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.view',
          params: { id: destination.id, slug: destination.slug },
        }"
        >{{ destination.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style lang="css">
#nav .vue-school-active-link {
  color: turquoise;
}
</style>
