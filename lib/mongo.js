/**
 * Created by chenyihui on 2016/12/28.
 */
exports.User = mongolass.model('User', {
    name: {type: 'string'},
    password: {type: 'string'},
    avatar: {tyep: 'string'},
    gender: {type: 'string', enum: ['m', 'f', 'x']},
    bio: {type: 'string'}
});

exports.User.index({name: 1}, {unique: ture}).exec();