const router = require('express').Router();
const MovieController = require('../controller/MovieController');

router.get('/:id', MovieController.getMovie);
router.get('/genders/:id', MovieController.getGenders);
router.get('/trending/:id', MovieController.getTredingMovies);
router.post('/title', MovieController.getMoviesByTitle);
router.post('/movies', MovieController.getSomeMovies);
module.exports = router;
