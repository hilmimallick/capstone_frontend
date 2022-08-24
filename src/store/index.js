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
    login: async (context, payload) => {
      let res = await fetch("http://localhost:7373/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });
      let data = await res.json();
      console.log(data);
      if (data.token) {
        context.commit("settoken", data.token);
        // Verify token
        //
        fetch("http://localhost:7373/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            context.commit("setuser", data.user);
            router.push("/products");
          });
      } else {
        alert(data);
      }
    },
    register: async (context, data) => {
      const { FullName, email, password } = data;
      fetch("http://localhost:7373/users", {
        method: "POST",
        body: JSON.stringify({
          FullName: FullName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setusers", json));
    },

    getproducts: async (context) => {
      fetch("http://localhost:7373/products")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products));
    },
  },
  getproduct: async (context, id) => {
    fetch("http://localhost:7373/products/" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setproduct", product));
    console.log(res);
  },
  deleteProduct: async (context, id) => {
    fetch("http://localhost:7373/products/" + id, {
      method: "DELETE",
    }).then(() => context.dispatch("getProducts"));
  },
  createProduct: async (context, Product) => {
    fetch("http://localhost:7373/products/", {
      method: "POST",
      body: JSON.stringify(Product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => context.dispatch("getProducts"));
  },
  updateProduct: async (context, Product) => {
    fetch("http://localhost:7373/products/" + Product.id, {
      method: "PUT",
      body: JSON.stringify(Product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => context.dispatch("getProducts"));
  },

  modules: {},
});
