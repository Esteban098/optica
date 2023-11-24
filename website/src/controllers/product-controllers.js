const fs = require("fs");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const { materialAndSize } = require("../utils/libFunctions");
const productsServices = require("../services/products");
const swal = require("sweetalert");
const {
  imageProduct,
  dataEyes,
  setValuesPrescription,
  getProductById,
  getFavInDb,
} = require("../services/products");

module.exports = {
  index: async (req, res) => {
    const products = await db.Product.findAll({
      where: {
        active: 1,
      },
      include: ["image", "price"],
    });

    res.render("products/products", { products });
  },

  create: async (req, res) => {
    const dataParaLaVista = await materialAndSize();
    res.render("products/products-create", {
      sizes: dataParaLaVista[0],
      materials: dataParaLaVista[1],
      errors: req.session.ErrorProductCreate,
      oldData: req.session.oldDataProductCreate,
    });
  },

  store: async (req, res) => {
    const body = req.body;
    const files = req.files;
    const validations = validationResult(req);

    if (validations.errors.length !== 0) {
      req.session.ErrorProductCreate = validations.mapped();
      req.session.oldDataProductCreate = body;
      for (image of files) {
        fs.unlink(image.path, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
      res.redirect("products/create");
    } else {
      const productId = await productsServices.createOne(body, files);
      console.log(productId);
      res.redirect(`/products/${productId}`);
    }
  },

  detail: async (req, res) => {
    const productId = req.params.productId;
    const sizes = await db.Size.findAll({
      raw: true,
      nest: true,
    });
    const product = await db.Product.findOne({
      where: {
        id: productId,
      },
      include: ["image", "size", "material", "price", "color"],
    });

    res.render("products/product-detail", { product, sizes });
  },

  edit: async (req, res) => {
    const productId = req.params.productId;
    const dataParaLaVista = await materialAndSize();
    const product = await db.Product.findOne({
      where: {
        id: productId,
      },
      include: ["image", "size", "material", "price", "color"],
    });
    console.log(dataParaLaVista[0]);
    res.render("products/product-edit", {
      product,
      sizes: dataParaLaVista[0],
      materials: dataParaLaVista[1],
      errors: req.session.errorProductUpdate,
      oldData: req.session.oldDataProductUpdate,
    });
  },

  update: async (req, res) => {
    const productId = req.params.productId;
    const body = req.body;
    console.log(body);
    const files = req.files;
    console.log(body);
    const validations = validationResult(req);

    if (validations.errors.length !== 0) {
      req.session.errorProductUpdate = validations.mapped();
      req.session.oldDataProductUpdate = body;
      for (image of files) {
        fs.unlink(image.path, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
      res.redirect(`/products/${productId}/edit`);
    } else {
      const product = await productsServices.updateOne(productId, body, files);
      res.redirect(`/products/${productId}`);
    }
  },

  destroy: (req, res) => {
    const productId = req.params.productId;
    console.log(productId);
    productsServices.eliminatedOne(productId);
    res.redirect("/products");
  },
  prescription: async (req, res) => {
    const id = req.params.productId;
    const data = await dataEyes();
    const dbSphere = data[0];
    const dbCylinder = data[1];
    const dbPupillaryDistance = data[2];

    const product = await getProductById(id);
    res.render("products/prescription-form", {
      product: product,
      dbSphere,
      dbCylinder,
      dbPupillaryDistance,
    });
  },
  processPrescription: async (req, res) => {
    const id = req.params.productId;
    const body = req.body;
    const userLogged = req.session.userLogged;
    const order = await setValuesPrescription(body, id, userLogged);
    setTimeout(function () {
      res.redirect("/");
    }, 2000);
  },
  listFavoriteCar: async () => {
    // no lo voy a poder hacer con pis serguto , asi que hacer lo normar y que la vista mueste los vaboritos de cada user
  },
};
