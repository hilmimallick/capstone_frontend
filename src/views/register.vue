<template>
  <div class="regis-page">
    <h1>If You Are Not A User Please Register ...</h1>
    <div class="container">
      <form @submit.prevent="register">
        <input
          class="register-form-name"
          type="text"
          v-model="full_name"
          placeholder="Full Name"
        />
        <input
          class="register-form-email"
          type="text"
          v-model="email"
          placeholder="Email"
        />
        <input
          class="register-form-password"
          type="text"
          v-model="password"
          placeholder="Password"
        />
        <div>
          <button id="register-btn" type="submit">Register</button>
        </div>
      </form>
    </div>
    <div v-if="users">Welcome {{ users.full_name }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      full_name: "",
      email: "",
      password: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    register() {
      return this.$store.dispatch("register", {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style></style>
