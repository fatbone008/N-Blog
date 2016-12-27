/**
 * Created by chenyihui on 2016/12/27.
 */
module.exports = {
    checkLogin: function checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录');
            return res.redirect('/signin');
        }
        next();
    },
    checkNotLogin: function checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', '未登录');
            return res.redirect('back');
        }
        next();
    }
}