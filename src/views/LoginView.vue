<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" type="text" id="username" name="username" />
      <label for="password">Password</label>
      <input v-model="password" type="password" id="password" name="password" />
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      window.user = this.username;
      this.$router.push({ name: "protected" });
    },
  },
};
</script>
