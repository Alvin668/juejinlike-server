// db/db_user.js
const db = require('./db')

function getUserInfo(userNo) {
    return db.dataGet("select * from userInfo where userno = `${userNo}`")
}

module.exports = {
    getUserInfo
}