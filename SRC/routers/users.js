const router = require('express').Router();
const UserController = require('../controller/UserController');

router.get('/user', UserController.getUser);
router.get('/user/:id', UserController.getUserById);
router.put('/', UserController.updateUser);
router.delete('/', UserController.deleteUser);

module.exports = router;