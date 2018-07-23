<template>
  <div class="select">
    <div class="top">
      <div class="left">
        基金名称
      </div>
      <div class="updown">
        <div class="left">
          <p class="name">最新估值</p>
          <p class="zdf">涨跌幅</p>
        </div>
        <div class="right">
          <div class="down"></div>
          <div class="up"></div>
        </div>
      </div>
      <div class="updown">
        <div class="left">
          <p class="name">净值</p>
          <p class="zdf">涨跌幅</p>
        </div>
        <div class="right">
          <div class="down"></div>
          <div class="up"></div>
        </div>
      </div>
    </div>
    <group class="group">
      <cell-box>
        <flexbox :gutter="0">
          <flexbox-item :span="1/2">
            <div class="flex-demo">1</div>
          </flexbox-item>
          <flexbox-item :span="1/4">
            <div class="flex-demo">2</div>
          </flexbox-item>
          <flexbox-item :span="1/4">
            <div class="flex-demo">3</div>
          </flexbox-item>
        </flexbox>
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
    </group>
  </div>
</template>

<script>
import { Group, CellBox, Flexbox, FlexboxItem } from "vux";

export default {
  components: {
    Group,
    CellBox,
    Flexbox,
    FlexboxItem
  }
};
</script>

<style lang="stylus" scoped>
.top
  display flex
  padding 10px 20px
  >.left
    flex 2
    display flex
    align-items center
.updown
  flex 1
  display flex
  align-items center
  justify-content flex-end
  .left
    text-align right
    p.name
      font-size 14px
      line-height 1.4
    p.zdf
      font-size 12px
      line-height 1.4
      color #999999
  .right
    margin-left 5px
    >.up
      width: 0px;
      height: 0px;
      border-width:4px;
      border-style:solid dashed dashed dashed;
      border-color:#cccccc transparent transparent transparent;
      margin-top 2px
    >.down
      width: 0px;
      height: 0px;
      border-width:4px;
      border-style:dashed dashed solid dashed;
      border-color:transparent transparent #cccccc transparent;
      margin-bottom 2px
</style>
