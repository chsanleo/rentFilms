//const { Movie } = require('../models');
const properties = require('../config/properties');

const axios = require('axios');

const MovieController = {
    async addMovie(req, res) {

    },

    async getMovie(req, res) {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${properties.externAPI_KEY}&language=${properties.externAPI_LANGUAGE}`);
            res.send(response.data);
        } catch (error) {
            res.status(500).send({ message: "There was a problem." });
        }
    },
    async getTredingMovies(req, res) {
        try {
            let idPage = req.params.id;
            let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${properties.externAPI_KEY}&language=${properties.externAPI_LANGUAGE}&page=` + idPage);
            res.send(response.data);
        } catch (error) {
            res.status(500).send({ message: "There was a problem." });
        }
    },    
    
    async getGenders(req, res) {
        //filter genero
    },

    async getMoviesByActor(req, res) {
        //filter actors
    },

    async getMoviesByTitle(req, res) {
       //search by title
    }


    
}
module.exports = MovieController;