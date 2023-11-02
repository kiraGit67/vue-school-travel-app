<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <!--
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
    <router-link to="panama">Panama</router-link>
    -->
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="destination.slug"
      >{{ destination.name }}</router-link
    >
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
