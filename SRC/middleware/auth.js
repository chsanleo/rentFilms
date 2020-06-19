const jwt = require('jsonwebtoken');
const properties = require ('../config/properties');
const { User, Token } = require('../models');

const auth = async (res, req, next) => {
    try {
        const token = req.header.authorization;
        const payload = jwt.verify(token, properties.SECRETWORD);
        const user = await User.findByPk(payload.id);
        const tokenFound = await Token.findOne({
            where: {
                token: token,
                UserId: payload.id,
                revoked: false
            }
        });
        if (!user || !tokenFound) {
            return res.status(401).send({
                message: 'You are not authorized.'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).send({message:'Try again later.'});
    }
}
module.exports = auth;