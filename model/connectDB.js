const mongoose = require('mongoose');


//如果没有blog数据库，mongodb会自动创建
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('数据库连接成功');
}).catch(() => {
    console.log('数据库连接失败');
});