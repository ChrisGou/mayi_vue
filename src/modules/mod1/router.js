import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Select from "./views/Select.vue";
import My from "./views/My.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
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
