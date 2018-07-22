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
      <grid :cols="2">
        <grid-item v-for="item of dfxjj_data" :key="item.name" class="dfxjj_data">
          <p class="name">{{item.name}}</p>
          <p class="rate">{{item.rate}}</p>
          <p class="tip">七日年化</p>
        </grid-item>
      </grid>
    </group>
    <group>
      <cell class="vux-1px-b" title="每天10块钱" value="更多" is-link>
        <span slot="after-title" class="after-title">提前入市等牛来</span>
        <span slot="after-title" class="left-border"></span>
      </cell>
      <div class="mtskq">
        <p class="name">银华富裕主题混合</p>
        <p class="rate">+40.60%</p>
        <p class="tips">近三年定投收益率</p>
        <x-button class="mtskq-btn">立即定投</x-button>
      </div>
    </group>
    <group>
      <cell class="vux-1px-b" title="绩优基金">
        <span slot="after-title" class="after-title">王牌好基，业绩优良</span>
        <span slot="after-title" class="left-border"></span>
      </cell>
      <div v-for="item of jyjj_data" :key="item.name" class="item_data vux-1px-b">
        <div class="left vux-1px-r">
          <p class="rate">+{{item.rate}}</p>
          <p class="tip">近一年涨跌幅</p>
        </div>
        <div class="right">
          <p class="name">{{item.name}}</p>
          <p class="info">{{item.info}}</p>
        </div>
      </div>
    </group>
    <group>
      <cell class="vux-1px-b" title="投资热点" value="更多" is-link>
        <span slot="after-title" class="left-border"></span>
      </cell>
      <div v-for="(item,index) of tzrd_data" :key="item.name" class="tzrd_data vux-1px-b">
        <div :class="[left,{ color: index==1 }]">{{item.name}}</div>
        <div class="right">
          <p class="info">{{item.info}}</p>
          <p class="tip">{{item.tip}}</p>
        </div>
      </div>
    </group>
    <group>
      <cell class="vux-1px-b" title="投资海外">
        <span slot="after-title" class="after-title">一键布局全球</span>
        <span slot="after-title" class="left-border"></span>
      </cell>
      <div v-for="item of tzhw_data" :key="item.name" class="item_data vux-1px-b">
        <div class="left vux-1px-r">
          <p class="rate">+{{item.rate}}</p>
          <p class="tip">近一年涨跌幅</p>
        </div>
        <div class="right">
          <p class="name">{{item.name}}</p>
          <p class="info">{{item.info}}</p>
        </div>
      </div>
    </group>
    <group>
      <cell class="vux-1px-b" title="基金财富号" value="更多" is-link>
        <span slot="after-title" class="after-title">专业机构，服务直达</span>
        <span slot="after-title" class="left-border"></span>
      </cell>
      <div v-for="item of jjcfh_data" :key="item.name" class="jjcfh_data vux-1px-b">
        <div class="left vux-1px-r">
          <img :src="item.img" alt="">
        </div>
        <div class="right">
          <p class="name">{{item.name}}</p>
          <p class="info">{{item.info}}</p>
          <p class="tip">{{item.tip}}</p>
        </div>
      </div>
    </group>
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
  FlexboxItem
} from "vux";

export default {
  name: "home",
  components: {
    Grid,
    GridItem,
    Group,
    Cell,
    XButton,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      left: "left",
      color: "color",
      dfxjj_data: [
        {
          name: "工银瑞信如意货币A",
          rate: "4.0670%"
        },
        {
          name: "建信现金增利货币",
          rate: "4.1520%"
        },
        {
          name: "华夏理财30天债券A",
          rate: "4.1830%"
        },
        {
          name: "广发理财30天债券A",
          rate: "4.0880%"
        }
      ],
      jyjj_data: [
        {
          name: "嘉实全球互联网股票(QDII)",
          rate: "16.92%",
          info: "10元海淘全球科技巨头"
        },
        {
          name: "易方达消费行业股票",
          rate: "22.71%",
          info: "喜欢你花钱的样子"
        }
      ],
      tzhw_data: [
        {
          name: "嘉实美国成长股票(QDII)",
          rate: "21.55%",
          info: "10元让美国巨头为你赚钱"
        },
        {
          name: "上投摩根中国世纪灵活配置混合(QDII)",
          rate: "21.19%",
          info: "Top中企一键淘"
        }
      ],
      tzrd_data: [
        {
          name: "银行",
          info: "抓住MSCI机会",
          tip: "A股入摩，银行受益"
        },
        {
          name: "创业板",
          info: '抢占"中国未来"风口',
          tip: "业绩支撑，行情向好"
        }
      ],
      jjcfh_data: [
        {
          img: require("../assets/yfd.png"),
          name: "易方达基金财富号",
          info: "五千万客户选了，来吧",
          tip: "买入费率1折起"
        },
        {
          img: require("../assets/gyrx.png"),
          name: "工银瑞信基金财富号",
          info: "聪明理财，工银一路陪伴",
          tip: "买入费率1折起"
        },
        {
          img: require("../assets/gt.png"),
          name: "国泰基金财富号",
          info: "股基投资NO.1，快跟上",
          tip: "买入费率1折起"
        }
      ]
    };
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
  font-size 13px
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
.dfxjj_data
  border-bottom 1px solid #F7F7F7
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
.item_data
  padding 25px 0
  margin-left 15px
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
.tzrd_data
  display flex
  margin-left 15px
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
.jjcfh_data
  margin-left 15px
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
      
</style>
