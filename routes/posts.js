/**
 * Created by chenyihui on 2016/12/27.
 */
var express = require('express');
var router = express.Router();
var PostModule = require('../models/posts');
var checkLogin = require('../middlewares/check').checkLogin;

// GET /posts 所有用户或者特定用户的文章页
//   eg: GET /posts?author=xxx
router.get('/', function(req, res, next) {
    console.log('get the posts.')
    res.render('posts');
});

// POST /posts 发表一篇文章
router.post('/', checkLogin, function(req, res, next) {
    author = req.session.user._id;
    title = req.fields.title;
    content = req.fields.content;

    try{
        if(!title){
            throw new Error('请填写题目');
        }

        if(!content){
            throw new Error('请填写文章内容');
        }
    }catch (e){
        req.flash('error',e.message);
        return res.redirect('back');
    }

    var post = {
        author: author,
        title: title,
        content: content,
        pv: 0
    }

    PostModule.create(post)
        .then(function (result) {
            post = result.ops[0];
            req.flash('success','文章发表成功');
            res.redirect('./posts/'+post._id);
        })
        .catch(next)
});

// GET /posts/create 发表文章页
router.get('/create', checkLogin, function(req, res, next) {
    res.render('create');
});

// GET /posts/:postId 单独一篇的文章页
router.get('/:postId', function(req, res, next) {
    res.send(req.flash());
});

// GET /posts/:postId/edit 更新文章页
router.get('/:postId/edit', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

// POST /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

// GET /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

// POST /posts/:postId/comment 创建一条留言
router.post('/:postId/comment', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

// GET /posts/:postId/comment/:commentId/remove 删除一条留言
router.get('/:postId/comment/:commentId/remove', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

module.exports = router;