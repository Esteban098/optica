const path = require("path");
const { body } = require("express-validator");
const db = require("../../database/models");
module.exports = [
    body("name").notEmpty().withMessage("El campo nombre es obligatorio"),
    body("lastName").notEmpty().withMessage("El campo apellido es obligatorio"),
    body("country").notEmpty().withMessage("El campo pais es obligatorio"),
    body("dateBirth")
        .notEmpty()
        .withMessage("El campo fecha de nacimiento es obligatorio"),
    body("email")
        .notEmpty()
        .withMessage("El campo Email es obligatorio")
        .isEmail()
        .withMessage("Debe ingresar un mail valido")
        .custom(async (value, { req }) => {
            const userFind = await db.User.findOne({
                where: {
                    email: req.body.email,
                },
            });
            if (userFind) {
                throw new Error("Este mail ya esta registrado");
            } else {
                return true;
            }
        }),
    body("password")
        .notEmpty()
        .withMessage("Debe ingresar una contraseña")
        .isLength({ min: 8 })
        .withMessage("Su contraseña debe tener al menos 8 caracteres"),
    body("confirmPassword")
        .notEmpty()
        .withMessage("Debe confirmar su contraseña")
        .isLength({ min: 8 })
        .withMessage("Su contraseña debe tener al menos 8 caracteres")
        .custom((fieldValue, { req }) => {
            if (fieldValue !== req.body.password) {
                throw new Error("Las contraseñas no coinciden");
            }
            return true;
        }),
    body("streetAddress")
        .notEmpty()
        .withMessage("El campo domicilio es obligatorio"),
    body("buy-sell"),
    body("favoriteCategory"),
    body("avatar").custom((values, { req }) => {
        const file = req.file;

        const extensionAcepted = [".jpeg", ".png", ".gif", ".jpg"];

        if (!file) {
            //si es undefined , lo niego y entra en el if
            req.file = {
                filename: "default.png",
            };
        } else {
            const fileExtension = path.extname(file.originalname);
            const extencionVerification =
                extensionAcepted.includes(fileExtension);

            if (!extencionVerification) {
                throw new Error(
                    `Solo se permiten fotos de formato ${extensionAcepted}`
                );
            }
        }
        return true;
    }),
];
