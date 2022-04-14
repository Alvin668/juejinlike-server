// rouers/index.js
const Router = require('koa-router')
const user = require('./user')
const juejin = require('./juejin')

const router = new Router({
    prefix: '/api' //统一路由前缀
})

//整合业务模块子路由
router.use('/user', user.routes(), user.allowedMethods())
router.use('/juejin', juejin.routes(), juejin.allowedMethods())

module.exports = router;