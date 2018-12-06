# my-project1

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# pages [mpvue-entry]https://github.com/F-loat/mpvue-entry
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


$ npm install eslint-friendly-formatter --save
可能缺少的文件，单独安装。


# vuex
store为vuex


# UI组件库

iView Weapp

**不安装UI组件库可能会报错。**
//引用UI组件 pages.js内
"usingComponents": {
  "i-button": "../../iView/button/index"
}

https://weapp.iviewui.com/docs/guide/start
UI库未引入请直接在官网下载。

