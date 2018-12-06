module.exports = [
  {
    path: 'pages/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    route: 'pages/index/home',
    config: {
      navigationBarTitleText: '首页',
      enablePullDownRefresh: true,
      //引用UI组件
      "usingComponents": {
        "van-button": "../../vant/button/index"
      }
    }
  },
  {
    path: 'pages/counter',
    config: {
      navigationBarTitleText: 'vuex'
    }
  },
  {
    path: 'packageA/logs',
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '查看启动日志'
    }
  }
]
