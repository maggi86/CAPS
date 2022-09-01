import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactsView.vue"),
  },
  {
    path: "/all",
    name: "all",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AllView.vue"),
    props: true,
  },
  {
    path: "/all/:id",
    name: "single",
    component: () =>
      import("../views/SingleView.vue"),
    props: true,
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import("../views/AdminView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import("../views/register.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import("../views/cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
