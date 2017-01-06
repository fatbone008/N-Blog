/**
 * Created by chenyihui on 2017/1/5.
 */
var Post = require('../lib/mongo').Post;

module.exports = {
    create:function (post) {
        return Post.create(post).exec();
    }
}