import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import About from "./components/About.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/about", component: About }
  ]
});

export default router;
