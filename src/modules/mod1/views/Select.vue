<template>
  <div class="select">
    <div class="select-list" :style="{height:selectListHeight}">
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
        <div class="updown" style="justify-content:flex-end">
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
        <div class="select-group">
          <cell-box v-for="item of select_data" :key="item.id">
            <flexbox :gutter="0" class="select-flexbox">
              <flexbox-item :span="1/2">
                <div class="item_name">{{item.name}}</div>
                <div class="item_id">{{item.id}}</div>
              </flexbox-item>
              <flexbox-item :span="1/4" style="text-align:right;display:flex;justify-content:center">
                <div>
                  <div class="item_guzhi">{{item.guzhi}}</div>
                  <div class="item_guzhi_rate">{{item.guzhi_rate}}</div>
                </div>
              </flexbox-item>
              <flexbox-item :span="1/4" style="text-align:right">
                <div class="item_jingzhi">{{item.jingzhi}}</div>
                <div class="item_jingzhi_bottom">
                  <span class="item_date">{{item.date}}</span>
                  <span class="item_jingzhi_rate" :style="{color: colors[item.jingzhi_rate.indexOf('+')>-1?'up':'down']}">{{item.jingzhi_rate}}</span>
                </div>
              </flexbox-item>
            </flexbox>
          </cell-box>
        </div>
        <div class="select-btn vux-1px-t">+ 自选基金</div>
        <div class="gz-tips">最新估值根据基金持仓和指数走势估算，仅供参考，实际涨跌幅以基金公司披露为准。</div>
      </group>
    </div>
    <div class="hq-modal" @touchmove="_canScroll" :style="{background: isMask? 'rgba(0,0,0,0.3)': ''}">
      <div class="hq" @click="isMask=!isMask">
        <span class="hq-name">{{hq_data[0].name}}</span>
        <span class="hq-value" :style="{color: colors[hq_data[0].rate.indexOf('+')>-1?'up':'down']}">{{hq_data[0].value}}</span>
        <span class="hq-rate" :style="{color: colors[hq_data[0].rate.indexOf('+')>-1?'up':'down']}">{{hq_data[0].rate}}</span>
        <span class="hq-name">{{hq_data[1].name}}</span>
        <span class="hq-value" :style="{color: colors[hq_data[1].rate.indexOf('+')>-1?'up':'down'],borderColor: colors[hq_data[1].rate.indexOf('+')>-1?'up':'down']}">{{hq_data[1].value}}</span>
        <span class="hq-rate" :style="{color: colors[hq_data[1].rate.indexOf('+')>-1?'up':'down'],borderColor: colors[hq_data[1].rate.indexOf('+')>-1?'up':'down']}">{{hq_data[1].rate}}</span>
        <span class="arrow" :class="{'arrow-up':!isMask,'down2up':!isMask,'arrow-down':isMask,'up2down':isMask}"></span>
      </div>
    </div>
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
  },
  data() {
    return {
      colors: {
        "up": "#fe5f3f",
        "down": "#0BA194"
      },
      selectListHeight: 0,
      isMask: false,
      arrow: true,
      select_data: [
        {
          name: "汇添富价值精选混合A",
          id: "519069",
          guzhi: "2.4242",
          guzhi_rate: "-1.17%",
          jingzhi: "2.4530",
          data: "07-20",
          jingzhi_rate: "+1.24%"
        },
        {
          name: "华安策略优选混合",
          id: "040008",
          guzhi: "1.5287",
          guzhi_rate: "-0.24%",
          jingzhi: "1.5393",
          data: "07-20",
          jingzhi_rate: "+1.33%"
        },
        {
          name: "交银优势行业混合",
          id: "519697",
          guzhi: "3.2977",
          guzhi_rate: "-0.27%",
          jingzhi: "3.2980",
          data: "07-20",
          jingzhi_rate: "+0.40%"
        },
        {
          name: "交银施罗德趋势优先混合",
          id: "519702",
          guzhi: "1.4210",
          guzhi_rate: "-1.17%",
          jingzhi: "1.4150",
          data: "07-20",
          jingzhi_rate: "-0.07%"
        },
        {
          name: "中欧新趋势(LOF)A",
          id: "166001",
          guzhi: "1.0578",
          guzhi_rate: "-0.37%",
          jingzhi: "1.0250",
          data: "07-20",
          jingzhi_rate: "+1.68%"
        },
        {
          name: "兴全合润分级混合",
          id: "163406",
          guzhi: "1.2288",
          guzhi_rate: "+0.17%",
          jingzhi: "1.2262",
          data: "07-20",
          jingzhi_rate: "-1.68%"
        },
        {
          name: "大成策略回报混合",
          id: "090007",
          guzhi: "2.4242",
          guzhi_rate: "-1.17%",
          jingzhi: "2.4580",
          data: "07-20",
          jingzhi_rate: "-1.24%"
        },
        {
          name: "银华中小盘混合",
          id: "180031",
          guzhi: "2.4242",
          guzhi_rate: "-1.17%",
          jingzhi: "2.4530",
          data: "07-20",
          jingzhi_rate: "-1.24%"
        },
        {
          name: "博时主题行业混合(LOF)",
          id: "160505",
          guzhi: "2.4242",
          guzhi_rate: "-1.17%",
          jingzhi: "1.5200",
          data: "07-20",
          jingzhi_rate: "-1.49%"
        },
        {
          name: "南方优选成长混合",
          id: "202023",
          guzhi: "2.4242",
          guzhi_rate: "-1.17%",
          jingzhi: "2.4210",
          data: "07-20",
          jingzhi_rate: "-1.14%"
        },
        {
          name: "南方新优享灵活配置混合",
          id: "000527",
          guzhi: "2.4242",
          guzhi_rate: "+1.57%",
          jingzhi: "2.4750",
          data: "07-20",
          jingzhi_rate: "-1.43%"
        },
        {
          name: "大成竞争优势混合",
          id: "090013",
          guzhi: "1.4242",
          guzhi_rate: "-1.17%",
          jingzhi: "1.2260",
          data: "07-20",
          jingzhi_rate: "-1.21%"
        },
        {
          name: "广发消费品精选混合",
          id: "270041",
          guzhi: "2.4242",
          guzhi_rate: "-2.17%",
          jingzhi: "2.6890",
          data: "07-20",
          jingzhi_rate: "-1.24%"
        },
        {
          name: "安信价值精选股票",
          id: "000577",
          guzhi: "2.4242",
          guzhi_rate: "+1.27%",
          jingzhi: "2.5110",
          data: "07-20",
          jingzhi_rate: "-1.49%"
        }
      ],
      hq_data: [
        {
          name: "上证指数",
          value: 2839.83,
          changeValue: "+10.55",
          rate: "+0.37"
        },
        {
          name: "深证成指",
          value: 9237.05,
          changeValue: "-14.43",
          rate: "-0.16"
        },
        {
          name: "创业板指",
          value: 1606.31,
          changeValue: "-3.24",
          rate: "-0.20"
        },
        {
          name: "沪深300",
          value: 3498.73,
          changeValue: "+5.83",
          rate: "+0.17"
        },
        {
          name: "上证50",
          value: 2509.29,
          changeValue: "+15.53",
          rate: "+0.62"
        },
        {
          name: "中证500",
          value: 5174.84,
          changeValue: "-0.41",
          rate: "-0.01"
        }
      ]
    };
  },
  methods: {
    _canScroll(e) {
      if (this.isMask) {
        e.preventDefault()
      }
    },
  },
  mounted() {
    this.selectListHeight = document.body.offsetHeight - 90 + 'px'
  }
};
</script>

<style lang="stylus" scoped>
.top
  display flex
  padding 5px 20px
  background #F9F9FB
  >.left
    flex 2
    display flex
    align-items center
    font-size 13px
.updown
  flex 1
  display flex
  align-items center
  justify-content center
  .left
    text-align right
    p.name
      font-size 13px
      line-height 1.4
    p.zdf
      font-size 11px
      line-height 1.4
      color #999999
  .right
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
.select-list
  overflow-y scroll
.select-group
  background #FFFFFF
  line-height 1.5
.select-flexbox
  padding 5px 0
.item_name
  width 90%
  overflow hidden;
  text-overflow ellipsis;
  white-space nowrap;
.item_id
  color #999999
  font-size 15px
.item_guzhi,.item_jingzhi,.item_guzhi_rate
  color #2E2E2E
.item_guzhi_rate,.item_jingzhi_rate
  font-size 14px
.item_jingzhi_bottom
  display flex
  justify-content flex-end
  align-items center
.item_date
  font-size 10px
  color #C3C3C3
  margin-right 5px
.upcolor
  color #fe5f3f
.downcolor
  color #0BA194
.select-btn
  background #ffffff
  text-align center
  padding 15px 0
.gz-tips
  text-align center
  padding 15px 30px 100px 30px
  font-size 13px
  color #999999
.hq-modal
  display flex
  align-items flex-end
  position absolute
  top 0
  left 0
  right 0
  bottom 50px
  .hq
    width 100%
    padding-left 15px
    height 40px
    display flex
    align-items center
    box-shadow 0 -4px 5px -3px #EEEEEE
    background #ffffff
    span
      display block
      line-height 0
    .hq-name
      font-size 12px
    .hq-value
      font-size 11px
      font-weight bold
      margin 0 8px
    .hq-rate
      font-size 10px
      padding 0 4px
      line-height 1!important
      position relative
      bottom 1px
      margin-right 20px
      border 1px solid #fe5f3f
      border-radius 2px
.arrow 
  width 8px
  height 8px
  border 0 solid #999999
  border-width 0 1px 1px 0
.arrow-up
  transform rotate(-135deg)
.arrow-down
  transform rotate(45deg)
@keyframes up2down
	from {transform:rotate(-135deg)}
	to {transform:rotate(45deg)}
@keyframes down2up
	from {transform:rotate(45deg)}
	to {transform:rotate(-135deg)}
.up2down
     animation up2down .2s ease-in
.down2up
     animation down2up .2s ease-in
</style>
