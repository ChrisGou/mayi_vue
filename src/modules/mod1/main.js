import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
const FastClick = require("fastclick");
FastClick.attach(document.body);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
