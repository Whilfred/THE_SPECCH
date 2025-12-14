const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload.middleware');
const controller = require('../controllers/order.controller');

router.post(
  '/orders',
  upload.single('payment_image'),
  controller.createOrder
);

module.exports = router;
