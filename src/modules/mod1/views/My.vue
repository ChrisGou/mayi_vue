<template>
  <div class="my">
    <div class="pannel">
      <div class="pannel-top">
        <div class="pannel-text">总金额(元)</div>
        <div class="amount">51,948.81</div>
        <div>
          <span class="pannel-text">买入待确认</span>
          <span class="buy-amount">50.00</span>
          <span class="pannel-text">元</span>
        </div>
      </div>
      <flexbox :gutter="0">
        <flexbox-item :span="1/3">
          <div class="pannel-info vux-1px-r">
            <div class="pannel-text">昨日收益(元)</div>
            <div class="earnings">+15.87</div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="pannel-info vux-1px-r">
            <div class="pannel-text">持有收益(元)</div>
            <div class="earnings">-2,119.43</div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="pannel-info">
            <div class="pannel-text">累计收益(元)</div>
            <div class="earnings">-2,295.85</div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="operate vux-1px-b">
      <flexbox :gutter="0">
        <flexbox-item :span="1/3">
          <div class="operate-item">
            <i class='iconfont icon-detail'></i>
            <div>收益明细</div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="operate-item">
            <i class='iconfont icon-chaoshijiaoyiliushui'></i>
            <div>交易记录</div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="operate-item">
            <i class='iconfont icon-calendar'></i>
            <div>我的定投</div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <group>
      <cell title="有1笔交易正在确认中" class="buying" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Flexbox, FlexboxItem } from "vux";

export default {
  components: {
    Group,
    Cell,
    Flexbox,
    FlexboxItem
  }
};
</script>

<style lang="stylus" scoped>
.pannel
  background #1B82D2
  padding 20px 0 10px 0
  .pannel-top
    text-align center
    margin-bottom 20px
.pannel-text
  font-size 12px
  color #A1CBEC
.pannel-info,.operate-item
  text-align center
.earnings,.buy-amount,.amount
  color #ffffff
  font-family PingFangSC-Regular
.amount
  font-size 36px
.buy-amount
  font-size 13px
.operate
  background #ffffff
.operate-item
  padding 10px 0
  font-size 13px
  line-height 1.4
.buying
  background #ffffff!important
  color #999999
  font-size 14px
  line-height 1.8
</style>