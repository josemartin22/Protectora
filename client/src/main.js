import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://protectoras.herokuapp.com"
    : "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json";

import router from "./router";

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
