import { createStore } from "vuex";
import router from "../router/index";
export default createStore({
  state: {
    users: null,
    user: null || JSON.parse(localStorage.getItem("users")),
    // || {
    //   // user_id: 1,
    //   email: "user@gmail.com",
    //   password: "$2a$10$ZlPG1udTBRYAH6zfELoak.its/VVpBR/pirS0TCQaaMvdlHIWwgty",
    //   full_name: "Mr User",
    //   billing_address: "1 user Road Cape Town",
    //   default_shipping_address: "1 Shipping Road",
    //   country: "South Africa",
    //   phone: "012345678",
    //   user_type: "user",
    //   cart: '[{"cartid":1,"name":"","price":9050,"description":"","artist":"","image":"https://i.postimg.cc/DyywjZkb/boston-public-library-4y-PHCb1-SPR4-unsplash.jpg","category":"","size":""}]',
    // },
    token: null,
    products: null,
    product: null,
    arts: null,
    admin: false,
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
      localStorage.setItem("users", JSON.stringify(user));
    },
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
    setarts: (state, arts) => {
      state.arts = arts;
    },
  },
  actions: {
    admincheck(context) {
      let user = context.state.user;
      if (user != null) {
        if (user.user_type === "admin") {
          context.state.admin = true;
        }
        context.dispatch("getproduct");
      }
    },
    // check: (context) => {
    //   let user = context.state.user;
    //   if (user != null) {
    //     context.dispatch("getcart");
    //   }
    // },
    // logout: async (context) => {
    //   context.commit("setusers", null);
    //   window.location = "/";
    // },

    login: async (context, payload) => {
      console.log(payload);
      let res = await fetch("https://lc-capstone.herokuapp.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let data = await res.json();

      let user = data.results;
      console.log(user);
      if (user) {
        context.commit("setuser", user);
      }
      // console.log(data);
      // console.log(user);
      if (data.token) {
        context.commit("settoken", data.token);
        // Verify token
        //
        // fetch("http://localhost:7373/users/verify", {
        //   headers: {
        //     "Content-Type": "application/json",
        //     "x-auth-token": data.token,
        //   },
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     let user = data.results;
        //     context.commit("setuser", user);
        //     // router.push("/products");
        //   });
      } else {
        alert(data);
      }

      router.push("/products");
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
      fetch("https://lc-capstone.herokuapp.com/users/register", {
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
      fetch("https://lc-capstone.herokuapp.com/users")
        .then((res) => res.json())
        .then((users) => context.commit("setusers", users));
    },

    getproducts: async (context) => {
      fetch("https://lc-capstone.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products));
    },

    getproduct: async (context, id) => {
      fetch("https://lc-capstone.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setproduct", product));
      // console.log(res);
    },
    Deleteproduct: async (context, id) => {
      fetch("https://lc-capstone.herokuapp.com/products/" + id, {
        method: "DELETE",
      }).then((product) => context.commit("setproducts", product));
    },
    Deleteuser: async (context, id) => {
      fetch("https://lc-capstone.herokuapp.com/users/" + id, {
        method: "DELETE",
      }).then((user) => context.commit("setusers", user));
    },
    Addproduct: async (context, product) => {
      fetch("https://lc-capstone.herokuapp.com/products/", {
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
      fetch("https://lc-capstone.herokuapp.com/products/" + Product.id, {
        method: "PUT",
        body: JSON.stringify(Product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.commit("setproducts"));
    },

    //cart
    getcart: async (context, id) => {
      id = context.state.user.user_id;
      await fetch("https://lc-capstone.herokuapp.com/users/" + id + "/cart", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.commit("setarts", data);
        });
    },
    addTocart: async (context, art, id) => {
      console.log(context.state.user);
      id = context.state.user.user_id;
      console.log(art);
      await fetch("https://lc-capstone.herokuapp.com/users/" + id + "/cart", {
        method: "POST",
        body: JSON.stringify(art),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getcart", id);
        });
    },
    clearcart: async (context, id) => {
      id = context.state.user.user_id;
      await fetch("https://lc-capstone.herokuapp.com/users/" + id + "/cart", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getcart", id);
        });
    },
    deletecartItem: async (context, list, id) => {
      id = context.state.user.user_id;
      await fetch(
        "https://lc-capstone.herokuapp.com/users/" +
          id +
          "/cart/" +
          list.cartid,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getcart", id);
        });
    },
  },
  modules: {},
});
