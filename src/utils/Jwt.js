const jwt = require('jsonwebtoken');
const {
    PRIVATE_KEY,
    EXPIRED
} = require('./config')
const HttpCode = require('./HttpCode')

class Jwt {
    static generateToken(payload) {
        const token = jwt.sign(payload, PRIVATE_KEY, EXPIRED);
        return token;
    }
    static verifyToken(token) {
        try {
            let tokenInfo = jwt.verify(token, PRIVATE_KEY, {
                algorithms: ['HS256']
            })
            return HttpCode.Success.success_ok;
        } catch (err) {
            return HttpCode.RequestError.request_error_forbidden;
        }
    }
}

module.exports = Jwt;