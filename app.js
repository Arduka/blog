const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

//连接数据库
require('./model/connectDB');
require('./model/user');

const app = express();

//处理post请求参数
app.use(bodyParser.urlencoded({ extended: false }));

//配置session
app.use(session({
    secret: 'secret key'
}))

//设置模板引擎
//1.设置模板文件路径
app.set('views', path.join(__dirname, 'views'));
//2.设置默认的模板后缀
app.set('view engine', 'art');
//3.将指定后缀名的模板引入响应的引擎
app.engine('art', require('express-art-template'));

//开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('OK');
});

//登录拦截
app.use('/admin', require('./middleware/loginGuard'));

const admin = require('./route/admin');

app.use('/admin', admin);


app.listen(80);
console.log('服务器启动成功');