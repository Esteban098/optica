const path = require("path");
const { body } = require("express-validator");
const { countImagesActives } = require("../../utils/libFunctions");
const db = require("../../database/models");
module.exports = [
    body("name")
        .notEmpty()
        .withMessage(
            "No completo el campo, se cargo con los valores anteriores"
        )
        .isLength({ min: 5 })
        .withMessage(
            "el nombre del producto debe contener al menos 5 caracteres"
        ),
    body("shortDescription")
        .notEmpty()
        .withMessage(
            "No completo el campo, se cargo con los valores anteriores"
        )
        .isLength({ min: 20 })
        .withMessage("La descripción debe contener menso de 20 caracteres"),
    body("price")
        .notEmpty()
        .withMessage(
            "No completo el campo, se cargo con los valores anteriores"
        )
        .isNumeric()
        .withMessage("El campo precio debe ser un numero"),
    body("size").notEmpty().withMessage("Debe seleccionar un talle"),
    body("color")
        .notEmpty()
        .isLength({ max: 7 })
        .withMessage(
            "No completo el campo, se cargo con los valores anteriores"
        ),
    body("image_edit_product").custom(async (values, { req }) => {
        const files = req.files;

        const imagesActives = await countImagesActives(
            //devuelve un numero con la cantidad de imágenes que hay en la db relacionada con este producto
            await db.Image.findAll({
                where: {
                    product_id: req.params.productId,
                },
                raw: true,
                nest: true,
            })
        );

        //si tiene menos de 8 fotos activas entra al if
        if (8 - imagesActives > 0) {
            if (files.length > 0) {
                return true;
            } else {
                //doble verificacion de formato
                const files = req.files;
                //console.log(files);
                const extensionAcepted = [
                    "image/jpeg",
                    "image/jpg",
                    "image/gif",
                    "image/png",
                ];

                for (image of files) {
                    console.log(!extensionAcepted.includes(image.mimetype));
                    if (!extensionAcepted.includes(image.mimetype)) {
                        // lo niego, false implica que es un formato valido
                        // entonces true significa ques no es un formato invalido
                        throw new Error(
                            `Debe subir una foto con formato valido, los formatos aceptados son  ${extensionAcepted}`
                        );
                    }
                }
            }
        } else {
            //si no tine lugar para fotos y no sube ninguna puede pasar
            if (files.length == 0) {
                return true;
            } else {
                //si no tiene lugar y quiso subir una imagen cargo el error
                throw new Error(
                    "Ya tiene 8 fotos de anteojos , debe eliminar alguna para cargar nuevas"
                );
            }
        }

        return true;
    }),
    body("longDescription")
        .notEmpty()
        .withMessage("Debe completar el campo descripción")
        .isLength({ min: 20 })
        .withMessage("La descripción debe contener menso de 20 caracteres"),
    body("material")
        .notEmpty()
        .isNumeric()
        .withMessage("Debe seleccionar un material"),
];
