const express = require('express');

const admin = express.Router();
//登录页
admin.get('/login', require('./admin/loginPage'));
//登录验证
admin.post('/login', require('./admin/login'));
//用户管理页
admin.get('/user', require('./admin/userPage'));
//退出登录
admin.get('/logout', require('./admin/logout'));
//新增用户功能
admin.get('/user-edit', require('./admin/user-edit'));

admin.post('/user-edit',require('./admin/user-edit-fn'));

module.exports = admin;