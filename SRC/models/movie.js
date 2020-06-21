const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({

    poster_path: {
        type: String,
        required: true
    },
    idIMDB: {
        type: Number,
        required: true
    },
    original_language: {
        type: String,
        required: true
    },
    original_title: {
        type: String,
        required: true
    },
    genre_ids: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    }
})

const movieModel = mongoose.model('movie', MovieSchema);
module.exports = movieModel;