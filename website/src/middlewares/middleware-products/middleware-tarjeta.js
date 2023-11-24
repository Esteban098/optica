const path = require("path");
const { body } = require("express-validator");

//validar los datos de las tarjetas
const validator = [
    body("numero-tarjeta")
        .notEmpty()
        .withMessage("Debes poner los numeros de tu tarjeta"),
    body("fecha-tarjeta")
        .notEmpty()
        .withMessage("Debes poner la fecha de tu tarjeta"),
    body("nombre")
        .notEmpty()
        .withMessage("Debes poner el nombre que figura en la tarjeta"),
    body("codigo")
        .notEmpty()
        .withMessage("Debes poner codigo del reverso de tu tarjeta"),
];

module.exports = validator;
