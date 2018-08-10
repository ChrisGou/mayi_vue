module.exports = {
  devServer: {
    historyApiFallback: {//当路由mode:histroy模式时，服务器必须如此配置，否则页面刷新报错
      index: '/mod1.html',
    },
    disableHostCheck: true,//避免内网穿透时Invalid Host header
  },
  lintOnSave: false,//禁用eslint
  baseUrl: process.env.NODE_ENV === 'production' ? '/mayi_vue/' : '/',
  pages: require('./multiPage.js'),
  productionSourceMap: false,//生产环境禁用map
  configureWebpack: config => {//只要这样配置，就可以正常的在你的项目中使用vux这个组件库了，但注意npm install vue-loader@14.2.2 -D
    require('vux-loader').merge(config, {
      plugins: ['vux-ui', {
        name: 'less-theme',
        path: './public/styles/theme.less'//自定义vux主题配色
      }]
    })
  }
}