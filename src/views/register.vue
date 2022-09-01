<template>
  <div class="register-frame">
    <div class="register-border">
      <div class="register-form">
        <form @submit.prevent="register">
          <div>
            <input
              class="register-form-name"
              type="text"
              v-model="full_name"
              placeholder="Full Name"
            />
          </div>

          <div>
            <input
              class="register-form-email"
              type="text"
              v-model="email"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              class="register-form-password"
              type="text"
              v-model="password"
              placeholder="Password"
            />
          </div>

          <div>
            <input
              class="register-form-password"
              type="text"
              v-model="billing_address"
              placeholder="billing_address"
            />
          </div>

          <div>
            <input
              class="register-form-password"
              type="text"
              v-model="default_shipping_address"
              placeholder="default_shipping_address"
            />
          </div>

          <div>
            <input
              class="register-form-password"
              type="text"
              v-model="country"
              placeholder="country"
            />
          </div>

          <div>
            <input
              class="register-form-password"
              type="text"
              v-model="phone"
              placeholder="phone"
            />
          </div>

          <div>
            <input
              class="register-form-usertype"
              type="text"
              v-model="user_type"
              placeholder="user"
              readonly
            />
            <!-- <select name="user" id="user" v-model="user_type">
              <option value="user">Customer</option>
            </select> -->
          </div>

          <div>
            <button id="register-btn" type="submit">Register</button>
          </div>
        </form>
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
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
