const Koa = require('koa')
const koastatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const router = require('./routers')
const TokenValidate = require('./middleware/TokenValidate')

const app = new Koa();

app.listen(3000, function () {
    console.log(`The server started at port: 3000, you can access it by http://localhost:3000`)
});

app.use(koastatic('./statics/'));
app.use(bodyParser());
// app.use(TokenValidate());
app.use(router.routes());
app.use(router.allowedMethods());