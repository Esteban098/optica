const express = require("express");
const router = express.Router();
const mainApiController = require("../../controllers/api/main-api-controller");
const productApiController = require("../../controllers/api/product-api-controller");

router.get("/", mainApiController.listHome);
router.get("/search", mainApiController.search);
router.get("/metrics/user", productApiController.getMetricsUser);
router.get("/metrics/product", productApiController.getMetricsProduct);
router.get("/metrics/order", productApiController.getMetricsOrder);

module.exports = router;
