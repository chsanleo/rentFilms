const router = require('express').Router();
const MainController = require('../controller/MainController');
const auth = require('../middleware/auth');


router.post('/login', MainController.login);
router.post('/signin', MainController.signIn);
router.get('/logout', auth, MainController.logout);
router.get('/trending',MainController.getTredingMovies)

router.get('/genders', MainController.getGenders);


module.exports = router;