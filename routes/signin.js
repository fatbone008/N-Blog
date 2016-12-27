/**
 * Created by will on 2016/12/27.
 */
var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

//Get /signin page for login
router.get('/',checkNotLogin,function (req, res, next) {
    res.send(req.flash());
});

router.post('/',checkNotLogin,function (req,res,next) {
    res.send(req.falsh());
});

module.exports = router;