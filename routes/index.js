/**
 * Created by chenyihui on 2016/12/26.
 */
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('posts');
    });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));

    app.use(function (req, res) {
        if(!res.headersSent){
            res.render('404');
        }
    })
};