const router = require('express').Router();
const MainController = require('../controller/MainController');

router.post('/login', MainController.login);
router.post('/signin', MainController.signIn);
router.post('/logout', MainController.logout);
router.get('/trending',MainController.getTredingMovies)

module.exports = router;