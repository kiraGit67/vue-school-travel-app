<template>
  <the-navigation />
  <div class="container">
    <router-view
      v-slot="{ Component }"
      class="view left-sidebar"
      name="LeftSidebar"
    >
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <router-view v-slot="{ Component }" class="main-view">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
  <router-view v-slot="{ Component }" name="FooterNavigation">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style lang="css">
.container {
  display: flex;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
}

/* transition .moveUp **************************************************************** */
.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}

/* transition .moveDown **************************************************************** */
.moveDown-enter-active {
  animation: fadeIn 1s ease-in;
}

.moveDown-leave-active {
  animation: moveDown 1s ease-out;
}

@keyframes moveDown {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(1000px);
  }
}

/* transition .fade **************************************************************** */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* transition .slide-fade ************************************************************ */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(400px);
  opacity: 0;
}
</style>
