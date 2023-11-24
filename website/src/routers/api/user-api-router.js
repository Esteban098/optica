const express = require("express");
const userApiController = require("../../controllers/api/user-api-controller");

const router = express.Router();

//User profile validación front
router.get("/passwordValidation", userApiController.getUserPassword);

//Register validación front
router.get("/validationUser", userApiController.getUserValidation);

//Login validación front
router.get("/validationLogin", userApiController.getLogin);

//Lista todos los usuarios
router.get("/", userApiController.list);

//Lista un usuario por su id
router.get("/:userId", userApiController.detail);

module.exports = router;
