<template>
  <nav>
    <router-link to="/">myHome</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/users">users</router-link> |
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#artCart"
      aria-controls="offcanvasRight"
    >
      <i class="fa-solid fa-cart-shopping"></i>
    </button>
    <artCart />
  </nav>
</template>
<script>
import artCart from "../components/cart.vue";

export default {
  props: ["user"],
  name: "navbar",
  components: {
    artCart,
  },
  mounted() {
    this.$store.dispatch("check");
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#offcanvasRight {
  width: 50%;
}
</style>
