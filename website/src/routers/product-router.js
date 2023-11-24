const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/product-controllers");
const uploadFiles = require("../middlewares/middleware-products/middleware-multer");
const validationFormCreateProduct = require("../middlewares/validations/validation-form-create-product");
const validationFormUpdateProduct = require("../middlewares/validations/validation-form-update-product");
const authMilddleware = require("../middlewares/middleware-user/auth-middleware");
/*** GET ALL PRODUCTS ***/
router.get("/", productControllers.index);

// router.get("/favorite/car", productControllers.listFavoriteCar);

// ******** CREATE PRODUCT ********//

router.get("/create", productControllers.create);
router.post(
  "/",
  uploadFiles.array("img_product_create", 8),
  validationFormCreateProduct,

  productControllers.store
);

// ******** GET PRODUCT DETAIL********//
router.get("/:productId", productControllers.detail);

// ******** EDIT PRODUCT ********//
router.get("/:productId/edit", productControllers.edit);

// ******** UPDATE PRODUCT ********//
router.put(
  "/:productId",
  uploadFiles.array("image_edit_product", 8),
  validationFormUpdateProduct,
  productControllers.update
);

// ******** DELETE PRODUCT ********//
router.delete("/:productId", productControllers.destroy);

// ******** PRESCRIPTION PRODUCT ********//
router.get("/:productId/prescription", productControllers.prescription);

router.post(
  "/:productId/prescription",
  authMilddleware,
  productControllers.processPrescription
);

module.exports = router;
