<template>
  <div id="register-section">
    <div class="register-frame">
      <div class="register-border">
        <div class="register-form">
          <div class="register-title"><h1 class="reg-text">Register</h1></div>
          <form @submit.prevent="register">
            <div class="register-input">
              <input
                class="reg"
                type="text"
                v-model="full_name"
                id="name"
                required
                name="user name"
              />
              <label for="name" class="register-label">Full name</label>
            </div>

            <div class="register-input">
              <input
                class="reg"
                type="email"
                name="email"
                v-model="email"
                required
                id="name"
              />
              <label for="name" class="register-label">Email Address</label>
            </div>

            <div class="register-input">
              <input
                class="reg"
                type="password"
                name="password"
                v-model="password"
                id="name"
                required
              />
              <label for="name" class="register-label">Password</label>
            </div>

            <div class="register-input">
              <input
                class="reg"
                type="text"
                name="billing_address"
                v-model="billing_address"
                id="name"
                required
              />
              <label for="name" class="register-label">Billing address</label>
            </div>

            <div class="register-input">
              <input
                class="reg"
                type="text"
                name="default_shipping_address"
                v-model="default_shipping_address"
                id="name"
                required
              />
              <label for="name" class="register-label">Shipping address</label>
            </div>

            <div class="register-input">
              <input
                class="reg"
                type="text"
                name="country"
                v-model="country"
                id="name"
                required
              />
              <label for="name" class="register-label">Country</label>
            </div>

            <div class="register-input">
              <input
                class="reg"
                type="phone"
                name="phone"
                v-model="phone"
                id="name"
                required
              />
              <label for="name" class="register-label">Phone #</label>
            </div>

            <div class="register-input">
              <input
                class="reg"
                type="text"
                v-model="user_type"
                placeholder="user"
                readonly
              />
            </div>

            <div class="reg-btn">
              <button type="submit" id="register-btn">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
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
      user_type: "user",
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
<style>
.register-title {
  display: flex;
  justify-content: center;
  position: absolute;
}

#register-section {
  padding-top: 3rem;
}

.register-frame {
  margin: 50px auto;
  border: 25px solid #222;
  height: 559px;
  width: 450px;
  -webkit-box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 3px 10px 4px rgba(0, 0, 0, 0.3);
}

.register-border {
  background: white;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: inset 10px 10px 10px 4px rgba(0, 0, 0, 0.4);
  box-shadow: inset 3px 7px 2px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-form {
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

.register-input {
  position: relative;
  margin: 1rem;
}

.reg {
  padding: 5px;
  border: none;
  border-radius: 4px;
  font: inherit;
  color: black;
  background-color: transparent;
  outline: 2px solid black;
}

.register-label {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(10px, 10px);
  transition: transform 0.25s;
  color: white;
  font-weight: bolder;
}

.reg:focus + .register-label,
.reg:valid + .register-label {
  transform: translate(10px, -14px) scale(0.8);
  color: white;
  padding-inline: 5px;
  background-color: black;
}

.reg:is(:focus, :valid) {
  outline-color: black;
}

.reg-text {
  font-family: "Rubik Wet Paint";
  font-weight: bolder;
  font-size: 5rem;
  color: #f3c66d;
  text-shadow: 1rem 1rem 1rem black;
  letter-spacing: 0.6rem;
  transform: rotate(310deg);
  -webkit-transform: rotate(310deg);
}

.log-btn {
  display: flex;
  justify-content: center;
}

#login-btn {
  background: transparent;
  font-weight: bolder;
  padding: 0.5rem;
}
</style>
