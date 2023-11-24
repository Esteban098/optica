const express = require("express");
const router = express.Router();
const validator = require("../middlewares/middleware-products/middleware-tarjeta")
const mainControllers = require("../controllers/main-controllers");
 

router.get("/", mainControllers.prescription);
//router.post("/", validator, mainControllers.compra);


module.exports = router;
