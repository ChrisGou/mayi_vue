<template>
  <div>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item link="https://sina.cn" label="基金排行">
        <i slot="icon" class='iconfont icon-paihangbang jjph'></i>
      </grid-item>
      <grid-item link="/" label="自选基金">
        <i slot="icon" class='iconfont icon-u38 zxjj'></i>
      </grid-item>
      <grid-item link="/" label="主题选基">
        <i slot="icon" class='iconfont icon-hot ztxj'></i>
      </grid-item>
    </grid>
    <group>
      <cell class="vux-1px-b" title="好基工作室" value="更多" is-link>
        <span slot="after-title" class="left-border"></span>
      </cell>
      <div class="hjgzs">
        <p>中欧行业成长混合A</p>
        <span>近三年涨幅</span>
        <span class="uprate">+31.37%</span>
        <div>
          <div class="left vux-1px-r">
            <p>好基</p>
            <p>点评</p>
          </div>
          <div class="right">连连抓住行业涨幅冠亚军</div>
          <div class="arrowDown"></div>
        </div>
        <x-button class="hjgzs-btn">10元体验好基金</x-button>
      </div>
    </group>
    <group>
      <cell class="vux-1px-b" title="低风险基金">
        <span slot="after-title" class="after-title">历史从未亏损</span>
        <span slot="after-title" class="left-border"></span>
      </cell>
    </group>
    <group>
      <cell class="vux-1px-b" title="每天10块钱" value="更多" is-link>
        <span slot="after-title" class="after-title">提前入市等牛来</span>
        <span slot="after-title" class="left-border"></span>
      </cell>
    </group>
    <group>
      <cell class="vux-1px-b" title="绩优基金">
        <span slot="after-title" class="after-title">王牌好基，业绩优良</span>
        <span slot="after-title" class="left-border"></span>
      </cell>
    </group>
    <group>
      <cell class="vux-1px-b" title="投资热点" value="更多" is-link>
        <span slot="after-title" class="left-border"></span>
      </cell>
    </group>
    <group>
      <cell class="vux-1px-b" title="投资海外">
        <span slot="after-title" class="after-title">一键布局全球</span>
        <span slot="after-title" class="left-border"></span>
      </cell>
    </group>
    <group>
      <cell class="vux-1px-b" title="基金财富号" value="更多" is-link>
        <span slot="after-title" class="after-title">专业机构，服务直达</span>
        <span slot="after-title" class="left-border"></span>
      </cell>
    </group>
  </div>
</template>

<script>
// @ is an alias to /src
import { Grid, GridItem, Group, Cell, XButton } from "vux";

export default {
  name: "home",
  components: {
    Grid,
    GridItem,
    Group,
    Cell,
    XButton
  }
};
</script>

<style lang="stylus">
.jjph
  color #3187FF
  font-size 24px!important
.zxjj
  color #FE5F3F
  font-size 16px!important
.ztxj
  color #FEB941
  font-size 24px!important
.weui-grids
  background #FFFFFF
.weui-grids:before
  display none
.weui-grid:after
  display none
.weui-grid
  padding 15px 0!important
.weui-grid__icon
  text-align: center
  line-height: 28px
.weui-grid__label
  margin 0!important
.weui-cells
  margin-top 10px!important
.weui-cells:before
  display none
.weui-cells:after
  display none
.weui-cell
  padding 12px!important
.vux-label
  font-size 17px
  font-weight bold
.after-title
  display block
  margin-left 8px
  font-size 12px
  color #999999
.weui-cell_access
  font-size 14px
.vux-cell-primary
  p
    display flex
    align-items center
.weui-cell__ft:after
  margin-top -6px!important
.left-border
  width 4px
  height 14px
  margin-right 5px
  background #219BF0
  order -1
.hjgzs
  padding 35px 28px 15px 28px
  text-align center
  >p
    font-size 16px
    height 16px
    line-height 16px
    font-weight bold
  >span
    font-size 15px
    color #999999
  >span.uprate
    font-weight bold
    color #fe5f3f
  >div
    display flex
    align-items center
    background #FFF2F2
    position relative
    margin 10px 0 20px 0
    >.arrowDown
      width 10px
      height 10px
      background #FFF2F2
      transform rotate(45deg)
      position absolute
      top -5px
      left 0
      right 0
      margin 0 auto
    >.left
      margin 4px 0
      padding 0 18px 0 12px
      font-size 15px
      font-weight bold
      color #fe5f3f
    >.right 
      margin-left 18px
      font-size 15px
  .hjgzs-btn
    background #108EE9
    border-radius 2px
    color #FFFFFF
    padding 5px 0
.weui-btn:after
  display none
</style>
