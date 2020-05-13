const express = require('express');
const { User } = require('../model/user');
const bcrypt = require('bcrypt');

const admin = express.Router();

admin.get('/login', (req, res) => {
    res.render('admin/login');
});

admin.post('/login', async (req, res) => {

    const { email, password } = req.body;

    //如果用户越过了前端的验证拦截，在服务端继续验证Email和密码是否为空,如果为空，阻止函数向下执行（阻止程序按空字符串查找）
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', { msg: '邮件地址或密码错误' });
    }
    //
    let user = await User.findOne({ email });
    if (user) {
        //比较post密码和数据库中的hash码，返回Boolean类型
        let isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
            res.redirect('/admin/user');
        } else {
            res.status(400).render('admin/error', { msg: '邮件地址或密码错误' });
        }
    } else {
        res.status(400).render('admin/error', { msg: '邮件地址或密码错误' });
    }

});

admin.get('/user',(req,res)=>{
    res.render('admin/user');
})
module.exports = admin;