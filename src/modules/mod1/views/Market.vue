<template>
  <div>
    <grid :show-lr-borders="false" :show-vertical-dividers="false" class="market-grids">
      <grid-item link="https://sina.cn" class="market-grid">
        <i class='iconfont icon-paihangbang jjph'></i>
        <p>基金排行</p>
      </grid-item>
      <grid-item link="/" class="market-grid">
        <i class='iconfont icon-u38 zxjj'></i>
        <p>自选基金</p>
      </grid-item>
      <grid-item link="/" class="market-grid">
        <i class='iconfont icon-hot ztxj'></i>
        <p>主题选基</p>
      </grid-item>
    </grid>
    <group>
      <cell class="market-cell vux-1px-b" is-link>
        <div slot="title" class="market-cell-title">
          <span>好基工作室</span>
        </div>
        <span class="market-cell-value">更多</span>
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
        <x-button class="hjgzs-btn" @click.native="setData">10元体验好基金</x-button>
      </div>
    </group>
    <group>
      <cell class="market-cell vux-1px-b">
        <div slot="title" class="market-cell-title">
          <span>低风险基金</span>
        </div>
        <span slot="after-title" class="market-cell-after-title">历史从未亏损</span>
      </cell>
      <grid :cols="2" class="market-grids" :show-lr-borders="false">
        <grid-item v-for="item of marketData.dfxjj_data" :key="item.name" class="dfxjj_data">
          <p class="name">{{item.name}}</p>
          <p class="rate">{{item.rate}}</p>
          <p class="tip">七日年化</p>
        </grid-item>
      </grid>
    </group>
    <group>
      <cell class="market-cell vux-1px-b" is-link>
        <div slot="title" class="market-cell-title">
          <span>每天10块钱</span>
        </div>
        <span slot="after-title" class="market-cell-after-title">提前入市等牛来</span>
        <span class="market-cell-value">更多</span>
      </cell>
      <div class="mtskq">
        <p class="name">银华富裕主题混合</p>
        <p class="rate">+40.60%</p>
        <p class="tips">近三年定投收益率</p>
        <x-button class="mtskq-btn">立即定投</x-button>
      </div>
    </group>
    <group>
      <cell class="market-cell vux-1px-b">
        <div slot="title" class="market-cell-title">
          <span>绩优基金</span>
        </div>
        <span slot="after-title" class="market-cell-after-title">王牌好基，业绩优良</span>
      </cell>
      <div class="jyjj_data">
        <div v-for="item of marketData.jyjj_data" :key="item.name" class="item_data vux-1px-b">
          <div class="left vux-1px-r">
            <p class="rate">+{{item.rate}}</p>
            <p class="tip">近一年涨跌幅</p>
          </div>
          <div class="right">
            <p class="name">{{item.name}}</p>
            <p class="info">{{item.info}}</p>
          </div>
        </div>
      </div>
    </group>
    <group>
      <cell class="market-cell vux-1px-b" is-link>
        <div slot="title" class="market-cell-title">
          <span>投资热点</span>
        </div>
        <span class="market-cell-value">更多</span>
      </cell>
      <div class="tzrd_data">
        <div v-for="(item,index) of marketData.tzrd_data" :key="item.name" class="tzrd_item_data vux-1px-b">
          <div :class="[left,{ color: index==1 }]">{{item.name}}</div>
          <div class="right">
            <p class="info">{{item.info}}</p>
            <p class="tip">{{item.tip}}</p>
          </div>
        </div>
      </div>
    </group>
    <group>
      <cell class="market-cell vux-1px-b">
        <div slot="title" class="market-cell-title">
          <span>投资海外</span>
        </div>
        <span slot="after-title" class="market-cell-after-title">一键布局全球</span>
      </cell>
      <div class="tzhw_data">
        <div v-for="item of marketData.tzhw_data" :key="item.name" class="item_data vux-1px-b">
          <div class="left vux-1px-r">
            <p class="rate">+{{item.rate}}</p>
            <p class="tip">近一年涨跌幅</p>
          </div>
          <div class="right">
            <p class="name">{{item.name}}</p>
            <p class="info">{{item.info}}</p>
          </div>
        </div>
      </div>
    </group>
    <group>
      <cell class="market-cell vux-1px-b" is-link>
        <div slot="title" class="market-cell-title">
          <span>基金财富号</span>
        </div>
        <span slot="after-title" class="market-cell-after-title">专业机构，服务直达</span>
        <span class="market-cell-value">更多</span>
      </cell>
      <div class="jjcfh_data">
        <div v-for="item of marketData.jjcfh_data" :key="item.name" class="jjcfh_item_data vux-1px-b">
          <div class="left vux-1px-r">
            <img :src="item.img" alt="">
          </div>
          <div class="right">
            <p class="name">{{item.name}}</p>
            <p class="info">{{item.info}}</p>
            <p class="tip">{{item.tip}}</p>
          </div>
        </div>
      </div>
    </group>
    <div class="bottom-tip">
      <p class="company">基金销售服务由蚂蚁（杭州）基金销售有限公司提供</p>
      <p class="tips">本页面非任何法律文件，投资前请阅读基金合同、招募说明书。过往业绩不预示未来表现，市场有风险，投资需谨慎。</p>
      <divider style="color:#b9b7b7">该页面由蚂蚁财富平台设计并提供</divider>
    </div>
    <toast v-model="showToast" type="text">{{toastMsg}}</toast>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  Grid,
  GridItem,
  Group,
  Cell,
  XButton,
  Flexbox,
  FlexboxItem,
  Divider,
  Toast
} from "vux";
// import {GET} from '../../../../public/utils/fetch'
import request from 'superagent';

export default {
  name: "home",
  components: {
    Grid,
    GridItem,
    Group,
    Cell,
    XButton,
    Flexbox,
    FlexboxItem,
    Divider,
    Toast
  },
  data() {
    return {
      left: "left",
      color: "color",
      marketData: {},
      toastMsg: '',
      showToast: false
    };
  },
  created() {
    request
      .post(this.API['getMarketData'])
      .end((err, res) => {//此处使用箭头函数，否则找不到this
        if (err) {
          alert(JSON.parse(res.text).msg)
          return;
        }
        
        this.marketData = JSON.parse(res.text).data[0];
        this.toastMsg = JSON.parse(res.text).msg
        this.showToast = true
      });
  },
  methods: {
    setData() {
      console.log('setData')
      request
        .post(this.API['setMarketData'])
        .end((err, res) => {//此处使用箭头函数，否则找不到this
          if (err) {
            alert(JSON.parse(res.text).msg)
            return;
          }
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.jjph
  color #3187FF
  font-size 24px!important
.zxjj
  color #FE5F3F
  font-size 18px!important
.ztxj
  color #FEB941
  font-size 24px!important
.market-grids
  background #FFFFFF
.market-grids:before
  display none
.market-grid:after
  display none
.market-grid
  padding 15px 0
  text-align center
  >i
    display block
    height: 28px
    line-height: 28px
  >p
    font-size 14px
    color #2c3e50
  .weui-cells
    margin-top 10px
  .weui-cells:before
    display none
  .weui-cells:after
    display none

.market-cell
  margin-top 10px
  background-color #FFFFFF
  padding 12px
  .market-cell-title
    display flex
    padding-left 8px
    border-left 4px solid #219BF0
    align-items center
    >span
      font-size 17px
      font-weight bold
      line-height 1
      position relative
      top 1px
  .market-cell-after-title
    margin-left 8px
    font-size 13px
    color #999999
  .market-cell-value
    font-size 14px
.market-grids:before
  display none
.market-grids:after
  display none
.hjgzs
  background #FFFFFF
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
  .hjgzs-btn:after
    display none

.dfxjj_data
  background #FFFFFF
  text-align center
  padding 25px 0 15px 0!important
  .name
    font-size 16px 
    color #000000
  .rate
    font-size 20px
    color #fe5f3f
    margin-top 10px
  .tip
    font-size 12px
    color #999999
.mtskq
  background #FFFFFF
  text-align center
  padding 20px 30px
  .name
    font-size 20px
    color #2c3e50
    font-weight bold
  .rate
    font-size 26px
    color #fe5f3f
    margin-top 10px
  .tips
    font-size 12px
    color #999999
  .mtskq-btn
    margin-top 15px
    background #108EE9
    border-radius 2px
    color #FFFFFF
    padding 5px 0
.jyjj_data,.tzhw_data,.jjcfh_data,.tzrd_data
  padding-left 15px
  background #FFFFFF
.item_data
  padding 25px 0
  display flex
  .left
    flex 1
    .rate
      font-size 22px
      color #fe5f3f
    .tip
      font-size 12px
      color #999999
  .right
    width 0
    flex 2
    display flex
    flex-direction column
    justify-content center
    margin-left 17px
    .name
      width 98%
      overflow hidden;
      text-overflow ellipsis;
      white-space nowrap;
    .info
      font-size 12px
      color #999999
      margin-top 5px
.tzrd_item_data
  display flex
  padding 20px 0
  .left
    width 60px
    height 60px
    border-radius 31px
    border 2px solid #219bf0
    display flex
    justify-content center
    align-items center
    color #219bf0
    font-size 14px
    font-weight bold
  .color
    border-color #fe5f3f!important
    color #fe5f3f!important
  .right
    flex 1
    display flex
    flex-direction column
    justify-content center
    padding-left 20px
    .info
      font-size 18px
    .tip
      font-size 14px
      color #999999
      margin-top 5px
.jjcfh_item_data
  display flex
  .left
    width 80px
    margin 20px 0
    padding 10px 0
    display flex
    align-items center
    justify-content  center
    img 
      width 50%
  .right
    flex 1
    display flex
    flex-direction column
    justify-content center
    padding-left 20px
    .name
      font-size 16px
    .info
      font-size 13px
      color #999999
    .tip
      font-size 13px
      color #fe5f3f
      margin-top 2px
.bottom-tip
  padding 0 15px 30px 15px
  font-size 13px
  text-align center
  .company
    color #999999
    margin 30px 0 10px 0
  .tips
    color #b9b7b7
</style>
