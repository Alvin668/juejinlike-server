// routers/user.js
const Router = require('koa-router')
const Jwt = require('../utils/Jwt')
const HttpCode = require('../utils/HttpCode')

const router = new Router();
const dbUser = require('../db/db_user')

router.post('/login', async (ctx, next) => {
    let {
        name,
        pwd
    } = ctx.request.body;
    //...此处省略用户密码验证
    // 如果验证通过，则拿到用户信息返回给前台
    const result = await dbUser.getUserInfo(name);
    const token = Jwt.generateToken({
        userInfo: {
            userName: name
        }
    })
    ctx.body = {
        code: HttpCode.Success.success_ok,
        msg: HttpCode.Success.success_ok_msg,
        token: token,
        data: result.recordset
    }
})

module.exports = router;