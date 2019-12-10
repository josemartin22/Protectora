import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login }
  ]
});

export default router;
