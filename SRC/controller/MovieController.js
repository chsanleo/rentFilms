const Movie = require('../models/movie');
const properties = require('../config/properties');

const moongoose = require('mongoose');
const axios = require('axios');

const MovieController = {

    async getMovie(req, res) {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${properties.externAPI_KEY}&language=${properties.externAPI_LANGUAGE}`);

            response.data['idIMDB'] = response.data.id;
            await Movie.updateOne({ 'idIMDB': response.data.idIMDB }, response.data, { upsert: true });
            
            let movie = await Movie.findOne({idIMDB : response.data.id});
            response.data['_id'] = movie._id;
            
            res.send(response.data);
        } catch (error) {
            res.status(500).send({ message: "There was a problem." });
        }
    },
    async getTitleMovieById(id) {
        try {
            return await Movie.findById(id).select('title -_id');
        } catch (error) {
            res.status(500).send({ message: "There was a problem." });
        }
    },
    async getSomeMovies(req,res)
    {
        try {
            let moviesTitles;
            for(let movie in req.movies)
            {
                moviesTitles.push(Movie.findOne(movie.id));
            }
            res.send(moviesTitles);
        } catch (error) {
            res.status(500).send({ message: "There was a problem." });
        }
    },
    //error no guarda.
    async getTredingMovies(req, res) {
        try {
            let idPage = req.params.id;
            let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${properties.externAPI_KEY}&language=${properties.externAPI_LANGUAGE}&page=${req.params.id}`);

            for (let idMovie in response.data.results) {
                let movie = response.data.results[idMovie];
                movie['idIMDB'] = movie.id;

                /*identificador Mongo, NO
                let newMovie = new Movie({
                    poster_path: response.data.results[idMovie].poster_path,
                    idIMDB: response.data.results[idMovie].id,
                    original_language: response.data.results[idMovie].original_language,
                    original_title: response.data.results[idMovie].original_title,
                    genre_ids: response.data.results[idMovie].genre_ids,
                    title: response.data.results[idMovie].title,
                    overview: response.data.results[idMovie].overview,
                    release_date: response.data.results[idMovie].release_date
                });*/

                //console.log(movie);

                Movie.updateOne({ 'idIMDB': movie.idIMDB }, movie, { upsert: true });
            };

            res.send(response.data.results);
        } catch (error) {
            //console.log(error);
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
        try {
            let title = '/' + req.body.title + '/';
            let response = await Movie.findOne({
                $or: [
                    { 'title': title },
                    { 'original_title': title }
                ]
            }).limit(20);
        } catch (error) {
            res.status(500).send({ message: "There was a problem." });
        }
    }



}
module.exports = MovieController;