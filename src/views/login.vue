<template>
  <div id="login-section">
    <div class="login-frame">
      <div class="login-border">
        <div class="login-form">
          <form @submit.prevent="login">
            <div class="login-input">
              <input
                class="input"
                type="text"
                v-model="email"
                name="email"
                id="name"
                required
              />
              <label for="name" class="input-label">Email Address</label>
            </div>

            <div class="login-input">
              <input
                class="input"
                type="text"
                v-model="password"
                required
                id="name"
                name="password"
              />
              <label for="name" class="input-label">Password</label>
            </div>

            <div>
              <button type="submit" id="login-btn">Login</button>
            </div>
          </form>
        </div>
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
#login-section {
  padding-top: 3rem;
}

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
  background-color: #8f5f00;
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-input {
  position: relative;
  margin: 3rem;
}

.input {
  padding: 10px;
  border: none;
  border-radius: 4px;
  font: inherit;
  color: black;
  background-color: transparent;
  outline: 2px solid black;
}

.input-label {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(10px, 10px);
  transition: transform 0.25s;
}

.input:focus + .input-label,
.input:valid + .input-label {
  transform: translate(10px, -14px) scale(0.8);
  color: black;
  padding-inline: 5px;
  background-color: white;
}

.input:is(:focus, :valid) {
  outline-color: #d1e5fe;
}
</style>
