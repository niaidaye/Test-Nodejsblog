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

