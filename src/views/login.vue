<template>
  <div class="Login">
    <h1 class="well">Welcome Please Login</h1>
    <div class="container">
      <form @submit.prevent="login">
        <input
          class="login-form-email"
          type="text"
          v-model="email"
          name="email"
          placeholder="Email"
        />

        <input
          class="login-form-password"
          type="text"
          v-model="password"
          placeholder="Password"
          name="password"
        />

        <div>
          <button type="submit" id="login-btn">Login</button>
        </div>
      </form>
    </div>
    <div v-if="users">Welcome {{ users.full_name }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style></style>
