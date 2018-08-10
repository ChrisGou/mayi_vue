// const host = 'https://mayinode.free.ngrok.cc' //内网穿透https接口固定地址，不稳定，需要设置任务计划程序，每隔5分钟定时重启，与github.io上的资源配合使用
const host = 'http://vnusg9.natappfree.cc/api' //内网穿透http接口地址，不固定，每次启动前缀改变，与mayi_node配合使用

//获取市场页数据
export const getMarketData = host + '/getMarketData';
export const setMarketData = host + '/setMarketData';