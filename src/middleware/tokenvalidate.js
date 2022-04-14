const Jwt = require('../utils/Jwt')
const HttpCode = require('../utils/HttpCode')
module.exports = function () {
    return async function (ctx, next) {
        if (ctx.req.url !== '/api/user/login') {
            const token = ctx.request.header.authorization; //从请求头的authorization属性中获取token
            if (token) {
                const status = Jwt.verifyToken(token);
                if (status === HttpCode.RequestError.request_error_forbidden) {
                    ctx.body = {
                        code: HttpCode.RequestError.request_error_forbidden,
                        message: HttpCode.RequestError.request_error_forbidden_msg
                    }
                } else {
                    await next();
                }
            } else {
                ctx.body = {
                    code: HttpCode.RequestError.request_error_unauthorized,
                    message: HttpCode.RequestError.request_error_unauthorized_msg
                }
            }
        } else {
            await next()
        }
    }
}