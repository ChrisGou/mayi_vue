import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as API from './api'

Vue.config.productionTip = false;
const FastClick = require("fastclick");
FastClick.attach(document.body);

Vue.prototype.API = API//挂载到Vue实例上面,全局变量,任意组件中使用this.API
var aaa = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
