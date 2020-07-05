const router = require('express').Router();
const OrderController = require('../controller/OrderController');

router.post('/', OrderController.addOrder);
router.get('/:id', OrderController.getOrder);
router.get('/', OrderController.getAllOrder);
router.get('/user/:id',OrderController.getAllOrdersByUser);
router.put('/', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;