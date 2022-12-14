import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import oneCard from "@/views/oneCard.vue";
import profile from "@/views/profile.vue";

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "myHome",
    component: () => import("../views/myHome.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/Products/:id",
    name: "oneCard",
    component: oneCard,
    props: true,
  },
  {
    path: "/users/:id",
    name: "profile",
    component: profile,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/users.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
