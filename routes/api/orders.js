const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

router.get('/', ordersCtrl.getConfirmation);
router.get('/cart', ordersCtrl.getCart);
router.post('/cart/items/:id', ordersCtrl.addToCart);
router.put('/cart/items/', ordersCtrl.changeWidgetQuantity);
router.post('/cart/checkout', ordersCtrl.checkout);

module.exports = router;