const router = require('express').Router();
const OrderController = require('../controller/OrderController');

router.post('/', OrderController.addOrder);
router.get('/:id', OrderController.getOrder);
router.get('/', OrderController.getAllOrder);
router.put('/', OrderController.updateOrder);//
//router.post('/', OrderController.deleteOrder);//

module.exports = router;