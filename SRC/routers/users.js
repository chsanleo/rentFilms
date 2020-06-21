const router = require('express').Router();
const UserController = require('../controller/UserController');

router.get('/user', UserController.getUser);
router.put('/', UserController.updateUser);
router.delete('/', UserController.deleteUser);

module.exports = router;