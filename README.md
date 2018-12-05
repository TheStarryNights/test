# test
mpvue的记录
使用

v2.0 版本仅支持 mpvue-loader@^1.1.0，兼容 megalo
mpvue
// webpack.base.conf.js
const MpvueEntry = require('mpvue-entry')

module.exports = {
  entry: () => MpvueEntry.getEntry(),
  ...
  plugins: [
    new MpvueEntry(),
    ...
  ]
}
megalo
// createBaseConfig.js
const MpvueEntry = require('mpvue-entry')

module.exports = {
  entry: MpvueEntry.getEntry(), // 不支持动态更新
  ...
  plugins: [
    new MpvueEntry({
      overwrite: true // 强制覆盖已有配置
    }),
    ...
  ]
}
// app.json
{
  "pages": [
    {
      "path": "pages/news/list", // 页面路径，同时是 vue 文件相对于 src 的路径，必填
      "config": { // 页面配置，即 page.json 的内容，可选
        "navigationBarTitleText": "文章列表",
        "enablePullDownRefresh": true
      }
    }
  ],
  "window": {}
}
参数

paths: String/Object
paths 为 String 类型时作为 pages 的值，为绝对路径或相对于项目根目录的相对路径
property	default	describe
config	'src/app.json'	项目配置文件
main	'src/main.js'	主入口文件，作为模板
template	'src/main.js'	入口模板文件，优先级较高
entry	'mpvue-entry/dist/'	各页面入口文件目录
// 示例
MpvueEntry.getEntry({
  config: 'src/app.js',
  main: 'src/index.js'
})
pages [String/Object]
pages 元素为 String 类型时作为 path 的值，为绝对路径或相对于项目根目录的相对路径
property	type	default	describe
path	String	-	文件路径
config	Object	{}	页面配置
route	String	-	页面路由
native	Boolean	false	原生页面
subPackage	Boolean	false	分包加载
root	String	-	分包根路径
name	String	root	分包别名
independent	Boolean	false	独立分包
// 示例
[{
  path: 'pages/news/list',
  route: 'pages/news/list/main'
}, {
  path: 'package/news/detail',
  root: 'package/news',
  subPackage: true,
  independent: true
}]
Tips

首页为 pages.js 中的第一项

可通过以下形式的注释指定 main.js 特有代码

console.log('hello world') // app-only

/* app-only-begin */
console.log('happy')
console.log('coding')
/* app-only-end */
官方模板生成的项目请务必去除以下配置
// webpack.base.conf.js
module.exports = {
  plugins: [
    new CopyWebpackPlugin([{
      from: '**/*.json',
      to: ''
    }], {
      context: 'src/'
    }),
    ...
  ]
}
