<template>
  <div class="my">
    <div class="pannel">
      <div class="pannel-top">
        <div class="pannel-text">总金额(元)</div>
        <div class="amount" @click="showMask = true">51,948.81</div>
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
    <group style="margin-top:10px" v-for="item of fund_data" :key="item.id">
      <cell :title="item.cfh.name" class="fund-cfh vux-1px-b" is-link v-if="item.cfh">
        <div v-if="item.cfh.img" class="fund-cfh-img" slot="icon">
          <img :src="item.cfh.img" style="width:20px"/>
        </div>
        <span v-if="item.cfh.extra" style="font-size:12px;color:#fe5f3f">{{item.cfh.extra}}</span>
      </cell>
      <div class="fund-item" v-for="(list, index) of item.list" :key="list.name">
        <div class="fund-item-title" :class="{'vux-1px-t':index>0}">
          <p>{{list.name}}</p>
        </div>
        <cell class="fund-item-box" is-link>
          <flexbox :gutter="0" class="fund-item-detail" slot="after-title">
            <flexbox-item :span="1/3">
              <div class="fund-item-info-text">金额</div>
              <div class="fund-amount">{{list.amount}}</div>
            </flexbox-item>
            <flexbox-item :span="1/3" style="text-align:center">
              <div class="fund-item-info-text">昨日收益</div>
              <div class="fund-earnings" :style="{color: _getColor(list.last_earnings)}">{{list.last_earnings}}</div>
            </flexbox-item>
            <flexbox-item :span="1/3" style="text-align:right">
              <div class="fund-item-info-text">持有收益</div>
              <div class="fund-earnings" :style="{color: _getColor(list.last_earnings)}">{{list.cur_earnings}}</div>
            </flexbox-item>
          </flexbox>
        </cell>
      </div>
    </group>
    <div class="bottom-tip">
      <p class="market-link">想再买点？去基金市场看看 ></p>
      <p class="company">基金销售服务由蚂蚁（杭州）基金销售有限公司提供</p>
      <p class="tips">本页面非任何法律文件，收益数据仅供参考。过往业绩不预示未来表现，市场有风险，投资需谨慎。</p>
      <divider style="color:#b9b7b7">该页面由蚂蚁财富平台设计并提供</divider>
    </div>
    <mayi-mask v-model="showMask">asdasdasdasdasd</mayi-mask>
  </div>
</template>

<script>
import { Group, Cell, Flexbox, FlexboxItem, Divider } from "vux";
import MayiMask from "../components/MayiMask";

export default {
  components: {
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Divider,
    MayiMask
  },
  data() {
    return {
      showMask: false,
      colors: {
        "up": "#fe5f3f",
        "down": "#0BA194"
      },
      fund_data: [
        {
          id: 1,
          cfh: {
            img: require("../assets/js.png"),
            name: '嘉实基金财富号'
          },
          list: [
            {
              name: '嘉实优化红利混合',
              amount: '2,641.01',
              last_earnings: '-31.77',
              cur_earnings: '-117.99'
            },
            {
              name: '嘉实3年封闭战略配售(LOF)',
              amount: '4,986.17',
              last_earnings: '0.00',
              cur_earnings: '-3.83'
            }
          ]
        },
        {
          id: 2,
          list: [
            {
              name: '大成竞争优势混合',
              amount: '3,354.63',
              last_earnings: '-49.30',
              cur_earnings: '-395.37'
            }
          ]
        },
        {
          id: 3,
          cfh: {
            img: require("../assets/fg.png"),
            name: '富国基金财富号'
          },
          list: [
            {
              name: '富国沪港深价值精选灵活配置混合',
              amount: '4,669.57',
              last_earnings: '-21.95',
              cur_earnings: '-50.43'
            }
          ]
        },
        {
          id: 4,
          cfh: {
            img: require("../assets/yfd.png"),
            name: '易方达基金财富号'
          },
          list: [
            {
              name: '易方达消费行业股票',
              amount: '4,833.31',
              last_earnings: '-111.10',
              cur_earnings: '-205.84'
            },
            {
              name: '易方达3年封闭战略配售(LOF)',
              amount: '4,989.15',
              last_earnings: '0.00',
              cur_earnings: '-10.85'
            }
          ]
        },
        {
          id: 5,
          cfh: {
            img: require("../assets/gt.png"),
            name: '国泰基金财富号'
          },
          list: [
            {
              name: '国泰国证食品饮料行业',
              amount: '2,519.93',
              last_earnings: '-45.71',
              cur_earnings: '-81.07'
            },
            {
              name: '国泰新经济灵活配置混合',
              amount: '4,949.91',
              last_earnings: '-46.63',
              cur_earnings: '-471.41'
            }
          ]
        },
        {
          id: 6,
          cfh: {
            img: require("../assets/yh.png"),
            name: '银华基金财富号'
          },
          list: [
            {
              name: '银华富裕主题混合',
              amount: '3,622.72',
              last_earnings: '-80.03',
              cur_earnings: '-97.28'
            }
          ]
        },
        {
          id: 7,
          cfh: {
            img: require("../assets/ha.png"),
            name: '华安基金财富号'
          },
          list: [
            {
              name: '华安策略优选混合',
              amount: '2,352.42',
              last_earnings: '-45.22',
              cur_earnings: '-97.58'
            }
          ]
        },
        {
          id: 8,
          cfh: {
            img: require("../assets/xq.png"),
            name: '兴全基金财富号',
            extra: '答题有礼'
          },
          list: [
            {
              name: '兴全合润分级混合',
              amount: '3,239.50',
              last_earnings: '-55.41',
              cur_earnings: '-368.47'
            },
            {
              name: '嘉实3年封闭战略配售(LOF)',
              amount: '4,986.17',
              last_earnings: '0.00',
              cur_earnings: '-3.83'
            }
          ]
        },
        {
          id: 9,
          list: [
            {
              name: '行健宏扬中国',
              amount: '2,890.20',
              last_earnings: '-6.58',
              cur_earnings: '-319.80'
            }
          ]
        },
        {
          id: 10,
          list: [
            {
              name: '东方红产业升级灵活配置混合',
              amount: '7,375.55',
              last_earnings: '-145.63',
              cur_earnings: '-624.45'
            }
          ]
        },
      ]
    }
  },
  methods: {
    _getColor(item) {
      return this.colors[item.indexOf('+') > -1 ? 'up' : 'down']
    },
  },
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
.amount
  font-size 36px
.buy-amount
  font-size 13px
.operate-item
  padding 10px 0
  font-size 13px
  line-height 1.4
.buying
  color #999999
  font-size 14px
  line-height 1.8
.operate,.buying,.fund-cfh,.fund-item
  background:#ffffff
.fund-cfh
  font-size 15px
  line-height 1.8
  .fund-cfh-img
    margin-right 5px
    display flex
    align-items center
.fund-item
  .fund-item-title
    padding-top 10px  
    padding-left 15px
    font-weight bold
    p
      width 60%
      overflow hidden;
      text-overflow ellipsis;
      white-space nowrap;
  .fund-item-box:before
    display none
.fund-item-detail
  font-size 14px
  line-height 1.7
  .fund-item-info-text,.fund-earnings
    color #999999
  .fund-amount
    color black
.bottom-tip
  padding 40px 15px 60px 15px
  font-size 13px
  text-align center
  .company
    color #999999
    margin 30px 0 10px 0
  .tips
    color #b9b7b7
</style>