<template>
  <div>
    <h1>{{ username }}‘s Invoices</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { onBeforeRouteLeave } from "vue-router";

export default {
  setup() {
    onBeforeRouteLeave(() => {
      const answer = window.confirm(
        "Are you sure you want to leave? Invoices are super awesome!"
      );

      if (!answer) return false;
    });
  },
  data() {
    return {
      username: window.user,
    };
  },
  methods: {
    logout() {
      window.user = null;
      this.$router.push({ name: "home", query: { logout: null } });
    },
  },
};
</script>
