<template>
  <nav>
    <div v-if="user !== null">
      <button
        class="nav-tog"
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
          <h5 class="nav-welcome" id="offcanvasRightLabel">
            Welcome {{ user.full_name }}
          </h5>
          <button
            type="button"
            class="btn-close text-reset bg-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body" id="nav-body">
          <div class="nav-routers">
            <div>
              <router-link id="nav-rout" to="/">Home</router-link>
            </div>
            <div>
              <router-link id="nav-rout" to="/products">Products</router-link>
            </div>
            <!-- <div>
              <router-link id="nav-rout" to="/login">login</router-link>
            </div> -->
            <!-- <div>
              <router-link id="nav-rout" to="/register">Register</router-link>
            </div> -->
            <div v-if="user = admin">
              <router-link id="nav-rout" to="/admin">Products Table</router-link>
            </div>
            <div v-if="user = admin">
              <router-link id="nav-rout" to="/users">Users Table</router-link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <router-link
        class="nav-pro-link"
        v-if="user !== null"
        :to="{ name: 'profile', params: { id: user.user_id } }"
      >
        <i class="fa-regular fa-user"></i> Welcome
        {{ user.full_name }}</router-link
      >
      <button
        class="cart-tog"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#artCart"
        aria-controls="offcanvasRight"
      >
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
      <artCart />
      <router-link id="nav-rout" to="/"
        ><button class="logout-btn" @click="logout">logout</button></router-link
      >
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
.nav-tog {
  background-color: #cf8c05;
  border-radius: 50%;
  color: white;
  border: 0.2rem solid white;
  margin: 0rem 0.5rem;
}
.cart-tog {
  background-color: #cf8c05;
  border-radius: 50%;
  color: white;
  border: 0.2rem solid white;
  margin: 0rem 0.5rem;
}
nav {
  z-index: 100;
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
}

#nav-rout.router-link-exact-active {
  color: black;
  margin-left: 2rem;
}

.nav-pro-link {
  padding: 0.5rem;
  color: white;
  font-weight: bolder;
  text-decoration: none;
}
.nav-pro-link:hover {
  color: black;
}

.logout-btn {
  font-weight: bolder;
  color: white;
  border: none;
  background: transparent;
  font-size: 1.1rem;
}
.logout-btn:hover {
  color: black;
}

#offcanvasRight-nav {
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.nav-welcome {
  font-weight: bolder;
  color: black;
}

#nav-body {
  display: flex;
  justify-content: center;
}

#nav-rout {
  font-weight: bolder;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
}

#nav-rout:hover {
  color: black;
}
</style>
