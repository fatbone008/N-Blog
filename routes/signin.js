/**
 * Created by will on 2016/12/27.
 */
var sha1 = require('sha1');
var express = require('express');
var router = express.Router();

var Usermodel = require('../models/users');
var checkNotLogin = require('../middlewares/check').checkNotLogin;

//Get /signin page for login
router.get('/',checkNotLogin,function (req, res, next) {
    res.render('signin');
});

router.post('/',checkNotLogin,function (req,res,next) {
    var name = req.fields.name;
    var password = req.fields.password;

    Usermodel.getUserByName(name)
        .then(function (user) {
            if(!user){
                req.flash('error',"找不到用户名");
                return res.redirect('back');
            }

            if(sha1(password) !== user.password){
                req.flash('error',"用户名或密码不正确！");
                return res.redirect('back');
            }
            req.flash('success','登录成功');

            delete user.password;
            req.session.user = user;
            return res.redirect('/posts');
        })
        .catch(next);
});

module.exports = router;