<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input
        v-model="username"
        type="text"
        id="username"
        name="username"
        class="input"
      />
      <label for="password"
        >Password&nbsp;<button @click="togglePassword">
          {{ buttonText }}
        </button></label
      >
      <input
        v-model="password"
        :type="inputType"
        id="password"
        name="password"
        class="input"
      />
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const username = ref("");
    const password = ref("");
    let inputType = ref("password");
    let buttonText = ref("Show Password");
    const router = useRouter();
    const route = useRoute();

    const togglePassword = () => {
      if (inputType.value === "password") {
        inputType.value = "text";
        buttonText.value = "Hide Password";
      } else {
        inputType.value = "password";
        buttonText.value = "Show Password";
      }
    };

    const login = () => {
      window.user = username.value;
      window.password = password.value;
      const redirectPath = route.query.redirect || "/protected";
      router.push(redirectPath);
    };

    return { username, password, inputType, buttonText, togglePassword, login };
  },
  /*
  data() {
    return {
      username: "",
      password: "",
    };
  },
  
  methods: {
    login() {
      window.user = this.username;
      const redirectPath = this.$route.query.redirect || "/protected";
      this.$router.push(redirectPath);
    },
  },
  */
};
</script>
