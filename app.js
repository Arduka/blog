const express = require('express');

require('./model/connectDB');
require('./model/user');

const app = express();

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(80);
console.log('服务器启动成功');