<template>
  <nav>
    <div v-if="user !== null">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight-nav"
        aria-controls="offcanvasRight"
      >
        <i class="fa-solid fa-bars"></i>
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight-nav"
        aria-labelledby="offcanvasRightLabel"
      >
        <div v-if="user !== null" class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Welcome {{ user.full_name }}</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body" id="nav-body">
          <div>
            <router-link to="/">myHome</router-link>
          </div>
          <div>
            <router-link class="link" to="/products">Products</router-link>
          </div>
          <div><router-link class="link" to="/login">login</router-link></div>
          <div>
            <router-link class="link" to="/register">Register</router-link>
          </div>
          <div><router-link class="link" to="/admin">Admin</router-link></div>
          <div><router-link class="link" to="/users">users</router-link></div>
          <div>
            <router-link class="link" to="/"
              ><button class="logout-btn" @click="logout">
                logout
              </button></router-link
            >
          </div>
        </div>
      </div>
      <router-link
        class="link"
        v-if="user !== null"
        :to="{ name: 'profile', params: { id: user.user_id } }"
      >
        <i class="fa-regular fa-user"></i> Welcome
        {{ user.full_name }}</router-link
      >
      <button
        class="btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#artCart"
        aria-controls="offcanvasRight"
      >
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
      <artCart />
    </div>
  </nav>
</template>
<script>
import artCart from "../components/cart.vue";
import store from "@/store";

export default {
  // props: ["user"],
  name: "navbar",
  components: {
    artCart,
  },
  mounted() {
    this.$store.dispatch("admincheck");
  },

  computed: {
    user() {
      return store.state.user;
    },
    admin() {
      return store.state.admin;
    },
  },
  methods: {
    logout() {
      console.log("object");
      this.$store.state.user = null;
      this.$store.state.cart = null;
      localStorage.removeItem("users");
      this.$router.push("/");
    },
  },
};
</script>
<style>
nav {
  z-index: 100;
  position: fixed;
  width: 100%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
}

.link {
  padding: 0.5rem;
}

.logout-btn {
  font-weight: bold;
  color: #2c3e50;
  border: none;
  background: transparent;
}

#offcanvasRight-nav {
  background: orange;
}
</style>
