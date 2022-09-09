<template>
  <div id="login-section">
     <router-link :to="{ name: 'myHome' }">
            <button id="one-re"><p><i class="fa-solid fa-arrow-left"></i>Return</p></button>
          </router-link>
           <router-link :to="{ name: 'register' }">
            <button id="one-re"><p><i class="fa-solid fa-arrow-left"></i>Sign-up</p></button>
          </router-link>
    <div class="login-frame">
      <div class="login-border">
        <div class="login-form">
          <div class="login-title"><h1 class="log-text">Login</h1></div>
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

            <div class="log-btn">
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
.login-title {
  display: flex;
  justify-content: center;
  position: absolute;
}

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
  z-index: 2;
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
  color: white;
  font-weight: bolder;
}

.input:focus + .input-label,
.input:valid + .input-label {
  transform: translate(10px, -14px) scale(0.8);
  color: white;
  padding-inline: 5px;
  background-color: black;
}

.input:is(:focus, :valid) {
  outline-color: black;
}

.log-btn {
  display: flex;
  justify-content: center;
}

#login-btn {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 3px solid rgba(255, 255, 255, 0.3);
  color: white;
margin: 1rem;
border-radius: 5px;
padding: 0.3rem;
font-weight: bold;
width: 6rem;
height: 3rem;
}

#login-btn:hover{
   background: rgba(174, 172, 172, 0.3);
  color: black;
}

.log-text {
  font-family: "Rubik Wet Paint";
  font-weight: bolder;
  font-size: 5rem;
  color: #f3c66d;
  letter-spacing: 0.6rem;
  text-shadow: 1rem 1rem 1rem black;
  transform: rotate(310deg);
  -webkit-transform: rotate(310deg);
}

</style>
