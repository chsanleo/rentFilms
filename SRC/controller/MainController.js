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

            const token = jwt.sign({ id: user.id }, properties.token_SECRETWORD, { expiresIn: '48h' });
            await Token.create({ token, UserId: user.id, revoke: false });
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
            req.body.RoleId = 2;
            await User.create(req.body);
            res.status(201).send({ message: "Created" });

        } catch (error) {
            res.status(500).send({ message: "There was a problem." });
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
            res.status(500).send({ message: "There was a problem." });
        }
    },

    async getTredingMovies(req, res) {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${properties.externAPI_KEY}&language=${properties.externAPI_LANGUAGE}&`);
            res.send(response.data);
        } catch (error) {
            res.status(500).send({ message: "There was a problem." });
        }
    },

    async getGenders(req, res) {
        try {
            console.log(properties.externAPI_KEY);
            console.log(properties.externAPI_LANGUAGE);
            let response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${properties.externAPI_KEY}&language=${properties.externAPI_LANGUAGE}`);
            console.log(response.data);
            res.send(response.data);

        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "There was a problem." });
        }
    }
}
module.exports = MainController;