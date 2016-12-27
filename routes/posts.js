/**
 * Created by chenyihui on 2016/12/27.
 */
var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

//GET /posts article pages for users or specific users.
//  eg: GET /posts?author=xxx
router.get('/',function (req, res, next) {
    res.send(req.flash());
});

//POST /posts post an article
router.post('/',checkLogin,function (req, res, next) {
    res.send(req.flash());
});

//GET /posts/create page for create article
router.get('/create',checkLogin,function (req, res, next) {
    res.send(req.flash());
});

//GET /posts/:postId page for single article
router.get('/:postId',function (res,req,next) {
    res.send(req.flash());
});

//GET /posts/:postId/edit page for update article
router.get('/:postId/edit',checkLogin,function (req, res, next) {
    res.send(req.flash());
});

//POST /posts/:postId/edit
router.post('/:postId/edit',checkLogin,function (req, res, next) {
    res.send(req.flash());
});

//GET /posts/:postId/remove
router.get('/:postId/remove',checkLogin,function (req, res, next) {
    res.send(req.flash());
});

//POST /posts/:postId/comment
router.post('/:postId/comment',checkLogin,function (req, res, next) {
    res.send(req.flash());
});


// GET /posts/:postId/comment/:commentId/remove 删除一条留言
router.get('/:postId/comment/:commentId/remove', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

module.exports = router;