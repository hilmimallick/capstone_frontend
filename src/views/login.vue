<template>
  <div class="login-frame">
    <div class="login-border">
      <div class="login-form">
        <form @submit.prevent="login">
          <div>
            <input
              class="login-form-email"
              type="text"
              v-model="email"
              name="email"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              class="login-form-password"
              type="text"
              v-model="password"
              placeholder="Password"
              name="password"
            />
          </div>

          <div>
            <button type="submit" id="login-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
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
<style>
.login-frame {
  margin: 50px auto;
  border: 25px solid #222;
  height: 559px;
  width: 450px;
  -webkit-box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 3px 10px 4px rgba(0, 0, 0, 0.3);
}

.login-border {
  background: white;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: inset 10px 10px 10px 4px rgba(0, 0, 0, 0.4);
  box-shadow: inset 3px 7px 2px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  height: 470px;
  width: 350px;
  margin-top: 8px;
  border: inset;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
