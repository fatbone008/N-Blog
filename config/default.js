/**
 * Created by chenyihui on 2016/12/27.
 */
module.exports = {
    port : 3000,
    session : {
        secret : 'myblog',
        key : 'myblog' ,
        maxAge : 2592000000,
    },
    mongodb : 'mongodb://localhost:27017/myblog'
}