<template>
  <div id="app">
    <router-view/>
    <tabbar>
      <tabbar-item :selected="market" link="/">
        <i slot="icon" class='iconfont icon-supermarket'></i>
        <i slot="icon-active" class='iconfont icon-market'></i>
        <span slot="label">市场</span>
      </tabbar-item>
      <tabbar-item :selected="select" link="/select">
        <i slot="icon" class='iconfont icon-tag-add-l'></i>
        <i slot="icon-active" class='iconfont icon-location-color_bookmark-add'></i>
        <span slot="label">自选</span>
      </tabbar-item>
      <tabbar-item :selected="my" link="/my">
        <i slot="icon" class='iconfont icon-layer1'></i>
        <i slot="icon-active" class='iconfont icon-layer'></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vux";
import "../../../public/iconfont/iconfont.css";
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      market: this.$router.match(location).hash == "#/",
      select: this.$router.match(location).hash == "#/select",
      my: this.$router.match(location).hash == "#/my"
    };
  }
};
</script>
<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: #f5f5f5;
}
</style>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
i
  font-size 20px!important
.weui-tabbar
  background-color #ffffff!important
</style>
