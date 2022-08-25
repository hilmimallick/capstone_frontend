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
        <input
          class="register-form-password"
          type="text"
          v-model="billing_address"
          placeholder="billing_address"
        />
        <input
          class="register-form-password"
          type="text"
          v-model="default_shipping_address"
          placeholder="default_shipping_address"
        />
        <input
          class="register-form-password"
          type="text"
          v-model="country"
          placeholder="country"
        />
        <input
          class="register-form-password"
          type="text"
          v-model="phone"
          placeholder="phone"
        />
        <select name="user" id="user" v-model="user_type">
          <option value="user">Customer</option>
        </select>
        <div>
          <button id="register-btn" type="submit">Register</button>
        </div>
      </form>
    </div>
    <!-- <div v-if="users">Welcome {{ users.full_name }}</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      full_name: "",
      email: "",
      password: "",
      billing_address: "",
      default_shipping_address: "",
      country: "",
      phone: "",
      user_type: "",
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
        billing_address: this.billing_address,
        default_shipping_address: this.default_shipping_address,
        country: this.country,
        phone: this.phone,
        user_type: this.user_type,
      });
    },
  },
};
</script>
<style></style>
