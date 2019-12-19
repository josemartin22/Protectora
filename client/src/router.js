import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import About from "./components/About.vue";
import New from "./components/New.vue";
import Modify from "./components/Modify.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/about", component: About },
    { path: "/new", component: New },
    { path: "/modify", component: Modify }
  ]
});

export default router;
