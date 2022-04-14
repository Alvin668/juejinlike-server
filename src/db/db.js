// db/db.js
const sql = require('mssql')
const db_server = '127.0.0.l'
const db_name = 'demo'
const config = {
    user: 'sa',
    password: 'admin@123',
    server: db_server,
    database: db_name,
    options: {
        trustServerCertificate: true
    }
}

//封装通用获取数据方法
async function dataGet(sql_text) {
    try {
        await sql.connect(config);
        const result = await sql.query(sql_text);
        await sql.close();
        return result;
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    dataGet
}