<template>
  <div id="nav">
    <AppLink id="logo" to="/">Vue School Travel App</AppLink>
    <div>
      <AppLink to="/about">About Us</AppLink>
      <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.view',
          params: { id: destination.id, slug: destination.slug },
        }"
        >{{ destination.name }}</AppLink
      >
      <AppLink :to="{ name: 'protected' }">Dashboard</AppLink>
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

@media screen and (max-width: 767px) {
  #nav > div {
    text-align: center;
  }
}
</style>
