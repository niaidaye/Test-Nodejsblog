# Test-Nodejsblog
模仿blog，学习node全栈开发
# jade APL
* Tags,Texts
* Idents,Comments
* ID,Class,Attributes
* Conditions,Loops
* Include,Inheritance,Block
* Mixin

# jade—pug的优势
extend继承优势，防止多余代码

block 

# express的路由更改
在config文件夹下的express.js文件中

module.exports函数下添加

app.use(function(req,res,next){

app.locals.pageName=req.path;

next();

})

在需要更改路由的地方就可以用

If pageName === '#'

来判断你所在的路由

# Jade后端布局
* layout文件
  * 
* 导航栏
* 侧边栏
* JS处理
* 图标库

# 博客系统的Schema设计
* Mongoose的简介
  * 构建与MongoDB和NodeJS之上
  * 基于Schema的数据建模解决方案
  * 提供类型转换、字段检验、查询构造等功能
* Schema设计
  * 文章表：Post（title、body、category、author、slug、published、meta、comments、created）
  * 分类表：Category（name、slug、created）
  * 用户表：User（name、email、password、created）
* Schema实现
