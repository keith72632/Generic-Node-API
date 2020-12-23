const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_PRIVATE_KEY, {
        expiresIn: '1d'
    })
}

module.exports = generateToken