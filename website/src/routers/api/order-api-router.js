const express = require("express");
const productApiController = require("../../controllers/api/product-api-controller");
const router = express.Router();
router.get("/", productApiController.listOrders);

router.get("/:id", productApiController.getOrder);

module.exports = router;
