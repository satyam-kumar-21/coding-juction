const express = require('express');
const checkout = require('../controllers/paymentController');
const paymentRouter = express.Router();

// Define the POST route for checkout
paymentRouter.post('/checkout', checkout);

module.exports = paymentRouter;
