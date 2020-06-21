const { User, Token } = require('../models');

const properties = require('../config/properties');

const axios = require('axios');
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
            if (!await bcrypt.compare(req.body.password, user.password)) {
                throw new Error({ message: "Wrong credentials" })
            }
            await Token.update({
                revoke: true
            }, {
                where: {
                    UserId: user.id,
                    revoke: false
                }
            });

            const token = jwt.sign({ id: user.id }, properties.token_SECRETWORD, { expiresIn: properties.token_EXPIRES });
            await Token.create({ token, UserId: user.id, revoke: false });
            res.status(200).send({
                user,
                token
            })
        } catch (error) {
            return res.status(400).send({ message: "Error, not correct data (email or password)" })
        }
    },

    async signIn(req, res) {
        try {
            let userDB = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (userDB) {
                res.status(400).send({ message: "This email already exist. Did u forget ur password?" });
            }

            req.body.password = await bcrypt.hash(req.body.password, properties.PASSWORDSALT);
            req.body.RoleId = 2;
            await User.create(req.body);
            res.status(201).send({ message: "Created" });

        } catch (error) {
            res.status(500).send({ message: "An error has occur, please try again later." });
        }
    },

    async logout(req, res) {
        try {
            await Token.update({ revoke: true }, {
                where: {
                    UserId: req.user.id
                }
            });
            res.send({ message: 'Correct logOut' });

        } catch (error) {
            res.status(500).send({ message: "An error has occur, please try again later" });
        }
    },

    async getTredingMovies(req, res) {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${properties.externAPI_KEY}&language=${properties.externAPI_LANGUAGE}&`);
            res.status(200).send(response.data);
        } catch (error) {
            res.status(500).send({ message: "An error has occur, please try again later." });
        }
    },

    async getGenders(req, res) {
        try {
            console.log(properties.externAPI_KEY);
            console.log(properties.externAPI_LANGUAGE);
            let response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${properties.externAPI_KEY}&language=${properties.externAPI_LANGUAGE}`);
            console.log(response.data);
            res.status(200).send(response.data);

        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "An error has occur, please try again later." });
        }
    }
}
module.exports = MainController;