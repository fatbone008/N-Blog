/**
 * Created by chenyihui on 2017/1/9.
 */
var marked = require('marked');
var Comment = require('../lib/mongo').Comment;

Comment.plugin('contentToHtml',{
    afterFind:function (comments) {
        return comments.map(function (comment) {
            comment.content = marked(comment.content);
            return comment;
        })
    }
});

module.exports = {
    create:function (comment) {
        return Comment.create(comment).exec();
    },

    delCommentById:function (commentId, author) {
        return Comment.removePostById({author:author,_id:commentId}).exec();
    },

    delCommentByPostId:function (postId) {
        return Comment.remove({postId:postId}).exec();
    },

    getComments:function (postId) {
        return Comment.find({postId:postId})
            .populate({path:'author',model:"User"})
            .sort({_id:1})
            .addCreateAt()
            .contentToHtml()
            .exec();
    },

    getCommentsCount:function (postId) {
        return Comment.count({postId:postId}).exec();
    }
}