const router = require('express').Router();
const MovieController = require('../controller/MovieController');

router.post('/', MovieController.addMovie);
router.post('/', MovieController.getMovie);
router.post('/', MovieController.updateMovie);
router.post('/', MovieController.deleteMovie);

module.exports = router;
