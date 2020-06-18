const router = require('express').Router();
const UserController = require('../controller/UserController');

router.post('/', UserController.addUser);
router.post('/', UserController.getUser);
router.post('/', UserController.updateUser);
router.post('/', UserController.deleteUser);

module.exports = router;