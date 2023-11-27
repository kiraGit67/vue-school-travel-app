<template>
  <the-navigation />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
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
