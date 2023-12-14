<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <div class="buttons">
      <button class="btn" @click="logout">Logout</button>
      <router-link :to="{ name: 'invoices' }">
        <button class="btn">Invoices</button>
      </router-link>
      <router-link :to="{ name: 'orders' }">
        <button class="btn">Orders</button>
      </router-link>
    </div>
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

<style scoped>
.buttons {
  display: flex;
  gap: 1rem;
}
</style>
