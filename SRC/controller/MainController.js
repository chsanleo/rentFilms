const { User, Token } = require('../models');
const properties = require('../config/properties');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const MainController = {
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            console.log(properties.SECRETWORD);
            if (!await bcrypt.compare(req.body.password, user.password)){
                throw new Error({ message: "Wrong credentials" })
            }

            const token = jwt.sign({ id: user.id }, properties.SECRETWORD, { expiresIn: '48h' });
            await Token.create({ token, UserId: user.id, revoked: false });
            res.send({
                user,
                token
            })
        } catch (error) {
            return res.status(400).send({ message: "Wrong logIn" })
        }
    },

    async signIn(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 9);
            await User.create(req.body);
            res.status(201).send({ message: "Created" });

        } catch (error) {
            res.status(500).send({ message: "There was a problem." });
        }
    },

    async logout(req, res) {
        try {
            await Token.update({ revoked: true }, {
                where: {
                    UserId: req.body.UserId
                }
            });
            res.send({ message: 'Correct signOut' });

        } catch (error) {
            res.status(500).send({ message: "There was a problem." });
        }
    }
}
module.exports = MainController;