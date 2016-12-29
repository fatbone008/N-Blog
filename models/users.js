/**
 * Created by chenyihui on 2016/12/29.
 */
var User = require('../lib/mongo').User;

module.exports = {
    create:function create(user) {
        return User.create(user).exec();
    }
};