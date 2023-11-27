<template>
  <the-navigation />
  <div class="container">
    <transition>
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>
