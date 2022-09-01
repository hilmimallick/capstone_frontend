import { createStore } from "vuex";
import router from "../router/index";
export default createStore({
  state: {
    users: null,
    user: null,
    token: null,
    products: null,
    product: null,
  },
  getters: {},

  mutations: {
    settoken: (state, token) => {
      state.token = token;
    },
    setusers: (state, users) => {
      state.users = users;
    },
    setuser: (state, user) => {
      state.user = user;
    },
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
  },
  actions: {
    logout: async (context) => {
      context.commit("setusers", null);
      window.location = "/login";
    },

    register: async (context, data) => {
      const {
        full_name,
        email,
        password,
        billing_address,
        default_shipping_address,
        country,
        phone,
        user_type,
      } = data;
      fetch("http://localhost:7373/users/register", {
        method: "POST",
        body: JSON.stringify({
          full_name: full_name,
          email: email,
          password: password,
          billing_address: billing_address,
          default_shipping_address: default_shipping_address,
          country: country,
          phone: phone,
          user_type: user_type,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setusers", json));
    },

    getusers: async (context) => {
      fetch("http://localhost:7373/users")
        .then((res) => res.json())
        .then((users) => context.commit("setusers", users));
    },

    getproducts: async (context) => {
      fetch("http://localhost:7373/products")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products));
    },

    getproduct: async (context, id) => {
      fetch("http://localhost:7373/products/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setproduct", product));
      console.log(res);
    },
    Deleteproduct: async (context, id) => {
      fetch("http://localhost:7373/products/" + id, {
        method: "DELETE",
      }).then((product) => context.commit("setproducts", product));
    },
    Deleteuser: async (context, id) => {
      fetch("http://localhost:7373/users/" + id, {
        method: "DELETE",
      }).then((user) => context.commit("setusers", user));
    },
    Addproduct: async (context, product) => {
      fetch("http://localhost:7373/products/", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.commit("setproducts"));
    },
    Updateproduct: async (context, Product) => {
      fetch("http://localhost:7373/products/" + Product.id, {
        method: "PUT",
        body: JSON.stringify(Product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.commit("setproducts"));
    },
  },
  modules: {},
});
