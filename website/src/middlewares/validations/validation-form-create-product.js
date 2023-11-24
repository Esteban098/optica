const path = require("path");
const { body } = require("express-validator");
module.exports = [
    body("name")
        .notEmpty()
        .withMessage("Debe completar el campo nombre del producto")
        .isLength({ min: 5 })
        .withMessage(
            "el nombre del producto debe contener al menos 5 caracteres"
        ),
    body("shortDescription")
        .notEmpty()
        .withMessage("Debe completar le campo de breve descripción")
        .isLength({ min: 20 })
        .withMessage("La descripción debe contener al menos de 20 caracteres"),
    body("price")
        .notEmpty()
        .withMessage("Debe completar el campo de precio")
        .isNumeric()
        .withMessage("El campo precio debe ser un numero"),
    body("size").notEmpty().withMessage("Debe seleccionar un talle"),
    body("color")
        .notEmpty()
        .isLength({ max: 7 })
        .withMessage("Debe seleccionar un color"),
    body("img_product_create").custom((values, { req }) => {
        const files = req.files;
        if (files.length == 0) {
            throw new Error("Debe subir al menos una imagen ");
        } else {
            //doble verificacion de formato
            const files = req.files;
            const extensionAcepted = [
                "image/jpeg",
                "image/jpg",
                "image/gif",
                "image/png",
            ];
            for (image of files) {
                if (!extensionAcepted.includes(image.mimetype)) {
                    // lo niego, false implica que es un formato valido
                    // entonces true significa ques no es un formato invalido
                    throw new Error(
                        `Debe subir una foto con formato valido, los formatos aceptados son  ${extensionAcepted}`
                    );
                }
            }
        }
        return true;
    }),
    body("longDescription")
        .notEmpty()
        .withMessage("Debe completar el campo descripción"),
    body("material")
        .notEmpty()
        .isNumeric()
        .withMessage("Debe seleccionar un material"),
];
