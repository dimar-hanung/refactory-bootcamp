require('dotenv').config()
const jwt = require('jsonwebtoken')
// const models = require('../models')
const response = require('../helpers/response')

module.exports = async (req, res, next) => {
    if (!req.headers['authorization']) res.status(401).json(response('fail', 'unauthenticated'))

    const token = req.headers['authorization'].split(' ')[1]
    try {
        const verify = jwt.verify(token, process.env.SECRET)
        if (verify) {
            req.token = token
            req.user_id = jwt.decode(token, process.env.SECRET)
            return next()
        }
    } catch (error) {
        return res.status(500).json(response('Fail', 'Invalid token'))
    }
}