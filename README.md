# mayi_vue
- 仿支付宝蚂蚁基金vue版
- vue-cli 3.X & node8.0+ & vux2.9 & 多页解决方案
- vue项目中引入iconfont https://blog.csdn.net/denl0918/article/details/78979176
- 自定义vux主题配色 见vue.config.js

##遇见的问题
- vux组件的样式 如果是组件自动添加的Dom层，则无法在业务使用中通过scoped样式进行覆盖修改，只能通过插槽修改样式
