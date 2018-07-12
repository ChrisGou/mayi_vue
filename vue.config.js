module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/mayi_vue/' : '/',
  pages: require('./multiPage.js'),
  configureWebpack: config => {//只要这样配置，就可以正常的在你的项目中使用vux这个组件库了，但注意npm install vue-loader@14.2.2 -D
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    })
  }
}