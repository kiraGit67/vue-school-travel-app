<template>
  <div>
    <h1>{{ username }}‘s Orders</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
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
