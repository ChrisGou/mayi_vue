# mayi_vue
- 仿支付宝蚂蚁基金vue版
- vue-cli 3.X & node8.0+ & vux2.9 & 多页解决方案
- vue项目中引入iconfont https://blog.csdn.net/denl0918/article/details/78979176
- 自定义vux主题配色 见vue.config.js
- 使用natapp.cn本地映射外网访问接口，本地启动node后台服务，配置config.ini并双击natapp.exe
- 使用superagent(ajax库)发送XHR请求
- 配置本地https
  https://blog.csdn.net/kitok/article/details/72957185 (windows安装openssl)
  https://blog.csdn.net/chenyufeng1991/article/details/60340006 (node express搭建https服务)
  https://www.ngrok.cc/ (Sunny-Ngrok内网穿透https域名)
##遇见的问题
- vux组件的样式 如果是组件自动添加的Dom层，则无法在业务使用中通过scoped样式进行覆盖修改，只能通过插槽修改样式
- 在写移动端页面的时候,弹出遮罩层后，我们仍然可以滚动页面。 vue中提供 @touchmove.prevent 方法可以完美解决这个问题

`<div class="dialog" @touchmove.prevent ></div>`
