const mongoose = require('mongoose');
//导入哈希码转化模块
const bcrypt = require('bcrypt');

//创建集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        //必要且唯一
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    //admin超级管理员，normal普通管理员
    role: {
        type: String,
        required: true
    },
    //0启用状态，1禁用状态
    state: {
        type: Number,
        default: 0
    }
});

//在数据库中创建users集合,返回一个User类
const User = mongoose.model('User', userSchema);

//向集合中插入文档
async function createUser() {
    const hash = await bcrypt.hash('12345', 10);
    const user = await User.create({
        username: 'norAdmin',
        email: 'admin@xy.com',
        password: hash,
        role: 'normal',
        state: 0
    });
}

//createUser();

module.exports = {
    User
}