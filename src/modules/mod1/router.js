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
    },
    {
      path: "/select",
      name: "select",
      component: Select
    },
    {
      path: "/my",
      name: "my",
      component: My
    }
  ]
});
