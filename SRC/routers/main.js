const router = require('express').Router();
const MainController = require('../controller/MainController');

router.post('/login', MainController.login);
router.post('/signin', MainController.signIn);
router.get('/signout', MainController.signOut);

module.exports = router;