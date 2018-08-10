<template>
  <div id="app" style="height:100%">
    <!-- main content -->
    <view-box ref="viewBox" :body-padding-top="isShowNav ? '46px' : '0'" body-padding-bottom="50px">
      <router-view/>
      <tabbar slot="bottom" class="app-tabbar" @on-index-change="_tabBarChange">
        <tabbar-item :selected="market" link="/market">
          <i slot="icon" class='iconfont icon-supermarket'></i>
          <i slot="icon-active" class='iconfont icon-market'></i>
          <span slot="label">市场2</span>
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
    </view-box>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, ViewBox } from "vux";
import "../../../public/iconfont/iconfont.css";
export default {
  components: {
    Tabbar,
    TabbarItem,
    ViewBox
  },
  data() {
    return {
      isShowNav: false,
      market: location.pathname == "/market",
      select: location.pathname == "/select",
      my: location.pathname == "/my"
    };
  },
  methods: {
    _tabBarChange() {
      this.$refs.viewBox.scrollTo(0,0);//tabbar切换时页面滚动到顶部
    }
  }
};
</script>
<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";
body {
  background-color: #f5f5f5;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

// reset some vux css
.weui-cells{
  margin-top: 0!important;
  background-color: #f5f5f5!important;
}
.weui-cells:before {
  display: none;
}

.weui-cells:after {
  display: none;
}
</style>
<style lang="stylus" scoped>
#app
  font-family PingFangSC-Regular
  color #2c3e50
i
  font-size 20px!important
.app-tabbar
  background-color #ffffff!important
</style>
