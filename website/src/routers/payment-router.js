const express = require("express");
const paymentControllers = require("../controllers/payment-controllers");
const router = express.Router();

/*** PAYMENT METHODS ***/
router.get("/", paymentControllers.paymentMethods);

/*** PAYMENT CONFIRMATION ***/
//router.get("/", productController.payment);

/*** CARD PAGE ***/
//router.get("/card", paymentControllers.card);

/*** CARD PAGE ***/
//router.get("/transfer", paymentControllers.transfer);

module.exports = router;
