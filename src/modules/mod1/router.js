import Vue from "vue";
import Router from "vue-router";
import Market from "./views/Market.vue";
import Select from "./views/Select.vue";
import My from "./views/My.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/market",
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
  ],
  mode: 'history',//使用hsitroy模式即 chrisgou.github.io/mayi_vue/mod1.html#/my --> chrisgou.github.io/mayi_vue/my ,解决微信分享#号后被截掉的问题（但必须合理配置服务器端，详见https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations）
  // scrollBehavior(to, from, savedPosition) {//切换路由滚动至顶部,但因为此项目加入了vux-tabbar模块，所以无效，因为页面高度未能滚动
  //   return { x: 0, y: 0 }
  // }
});
