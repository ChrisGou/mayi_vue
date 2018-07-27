import Vue from "vue";
import Router from "vue-router";
import Market from "./views/Market.vue";
import Select from "./views/Select.vue";
import My from "./views/My.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "market",
      component: Market
      // component: resolve => require(['./views/Market.vue'], resolve)
    },
    {
      path: "/select",
      name: "select",
      component: Select
      // component: resolve => require(['./views/Select.vue'], resolve)
    },
    {
      path: "/my",
      name: "my",
      component: My
      // component: resolve => require(['./views/My.vue'], resolve)
    }
  ]
});
