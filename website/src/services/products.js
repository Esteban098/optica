const db = require("../database/models");
const jsonHelper = require("../utils/jsonHelper");
const libFunctions = require("../utils/libFunctions");
const productsFilePath = "../data/productsDataBase.json";
const products = jsonHelper.getData(productsFilePath);

module.exports = {
  listProductsHome: async () => {
    try {
      const products = await db.Product.findAll({
        where: {
          active: 1,
        },
        include: [{ association: "image" }, { association: "price" }],
        limit: 12,
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  },

  findOne: (productId) => {
    try {
      const product = products.find((prod) => {
        return productId == prod.productId;
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  },

  createOne: async (body, files) => {
    try {
      const product = await db.Product.create({
        name: body.name,
        shortDescription: body.shortDescription,
        longDescription: body.longDescription,
        size_id: body.size,
        material_id: body.material,
        active: 1,
      });
      const productId = product.id;
      //  IMAGE
      const dataImages = libFunctions.dataImages(files);
      //dataImages es un array de objetos que tienen la estructura qeu requiere la DB (es decir las cols con sus filas)
      dataImages.forEach(async (file) => {
        await db.Image.create({
          ...file,
          product_id: productId,
        });
      });
      let priceDiscount;
      if (body.discount) {
        const discount = (body.discount * body.price) / 100;
        priceDiscount = body.price - discount;
      } else {
        priceDiscount = null;
      }
      await db.Price.create({
        price: body.price,
        discount: body.discount,
        priceDiscount: priceDiscount,
        product_id: productId,
      });
      await db.Color.create({
        name: body.color,
        product_id: productId,
      });

      return productId;
    } catch (error) {
      console.log(error);
    }
    //falta hacer todo eso con todas los demás campos del formulario que tengan relaciones
  },
  search: (query) => {
    const searchar = products.filter((prod) => {
      return prod.name.indexOf(libFunctions.firstLetterUpperCase(query)) != -1;
    });
    return searchar;
  },
  updateOne: async (productId, body, files) => {
    try {
      const name = libFunctions.firstLetterUpperCase(body.name);
      const newImages = libFunctions.dataImages(files);
      //newImages me devuelve un array de objetos como esta en la db la tabla images
      db.Product.update(
        {
          name: body.name,
          shortDescription: body.shortDescription,
          longDescription: body.longDescription,
          material_id: body.material,
          size_id: body.size,
          active: 1,
        },
        {
          where: {
            id: productId,
          },
        }
      );
      //   product.setSize(body.size);
      //   product.setMaterial(body.material);
      let priceDiscount;
      if (body.discount) {
        const discount = (body.discount * body.price) / 100;
        priceDiscount = body.price - discount;
      } else {
        priceDiscount = null;
      }
      await db.Price.update(
        {
          price: body.price,
          discount: body.discount,
          priceDiscount: priceDiscount,
        },
        {
          where: {
            id: productId,
          },
        }
      );

      await db.Color.update(
        {
          name: body.color,
        },
        {
          where: {
            id: productId,
          },
        }
      );
      const ImagesInDB = await db.Image.findAll({
        //devuelve instancia de Image, que es un array de objetos de las datos de imágenes relacionadas con producto en la DB
        where: {
          product_id: productId,
        },
        raw: true,
        nest: true,
      });
      const countImagesActives = libFunctions.countImagesActives(ImagesInDB);
      //devuelve un numero con la cantidad de imágenes que hay en la db relacionada con este producto
      const countImagesIngresadas = libFunctions.countImagesActives(newImages);
      //devuelve un numero con la cantidad de imágenes que quiere ingresar
      if (8 - countImagesActives > 0) {
        //si tiene menos de 8 fotos activas entra al if
        for (let i = 0; i < 8 - countImagesActives; i++) {
          //maximo de 8 fotos , recorro el nuevo array con fotos y las voy subiendo a la db hasta que complete un máximo de 8
          if (countImagesIngresadas > i) {
            // aca entra la cantidad de veces que de fotos tiene
            //sin ese if, tendría lugar para 5 fotos sube 3  pero en la db quedan subidas 5 y 2 de las 5 están en null
            await db.Image.create({
              ...newImages[i],
              product_id: productId,
            });
          }
        }
      }
      return `/products/${productId}`;
    } catch (error) {
      console.log(error);
    }
  },
  getProductById: async (id) => {
    const product = await db.Product.findOne({
      where: {
        id: id,
      },
      include: [
        "image",
        { association: "size" },
        { association: "material" },
        { association: "price" },
        { association: "color" },
        "category",
      ],
    });
    return product;
  },
  dataEyes: async () => {
    const data = await Promise.all([
      db.Sphere.findAll({ raw: true }),
      db.Cylinder.findAll({ raw: true }),
      db.Pupillary_Distance.findAll({ raw: true }),
    ]);
    return data;
  },

  eliminatedOne: async (productId) => {
    try {
      const product = await db.Product.findByPk(productId);
      product.set({
        active: 0,
      });
      product.save();
    } catch (error) {
      console.log(error);
    }
  },
  setValuesPrescription: async (body, id, userLogged) => {
    try {
      const eye = await Promise.all([
        db.Right_Eye.create({
          eyeRight_SPH_id: body.sphereRightEye,
          eyeRight_CYL_id: body.cylinderRightEye,
          axisRightEye: body.AxisRightEye,
        }),
        db.Left_Eye.create({
          eyeLeft_SPH_id: body.sphereLeftEye,
          eyeLeft_CYL_id: body.cylinderLeftEye,
          axisLeftEye: body.AxisLeftEye,
        }),
      ]);
      const rightEye = eye[0];
      const leftEye = eye[1];

      const valueEye = await db.Value_Eye.create({
        rightEye_id: rightEye.id,
        leftEye_id: leftEye.id,
        pupillaryDistance_id: body.pupillaryDistance,
      });

      const prescription = await db.Prescription.create({
        name: `User : ${userLogged.name}, Email: ${userLogged.email}`,
        status: 1,
      });
      await prescription.setValueEye(valueEye, {
        through: "prescription_values",
      });

      const product = await db.Product.findByPk(id);

      const order = await db.Order.create({
        user_id: userLogged.id,
      });
      await order.setProduct(product);

      await db.Order_Detail.update(
        {
          prescription_id: prescription.id,
        },
        {
          where: {
            order_id: order.id,
          },
        }
      );
      return order;
    } catch (errors) {
      console.log(errors);
    }
  },
  getDataPrescription: async (id) => {
    const dataEyes = await db.Prescription_Value.findOne({
      where: { id: id },
      include: [
        {
          model: db.Prescription,
          as: "prescription",
        },
        {
          model: db.Value_Eye,
          as: "valueEye",
          include: [
            {
              model: db.Right_Eye,
              as: "rightEye",
              include: [{ all: true }],
            },
            {
              model: db.Left_Eye,
              as: "leftEyes",
              include: [{ all: true }],
            },
            {
              model: db.Pupillary_Distance,
              as: "pupillaryDistance",
            },
          ],
        },
      ],
    });
    return dataEyes;
  },
  addToAndRemoveCar: async (userId, productId) => {
    const checkFavInDb = await db.Product_favorite.findAll({
      where: {
        user_id: userId,
        product_id: productId,
      },
    });
    if (checkFavInDb.length == 0) {
      const setFavInDb = await db.Product_favorite.create({
        user_id: userId,
        product_id: productId,
      });
    } else {
      await db.Product_favorite.destroy({
        where: {
          user_id: userId,
          product_id: productId,
        },
      });
      return checkFavInDb;
    }
  },
  destroyFav: async (userId, productId) => {
    await db.Product_favorite.destroy({
      where: {
        user_id: userId,
        product_id: productId,
      },
    });
    //consulto si se borro
    const checkDelete = await db.Product_favorite.findOne({
      where: {
        user_id: userId,
        product_id: productId,
      },
    });
    console.log(checkDelete, 544545454545454545454545454);
    if (!checkDelete) {
      const updatedData = await db.Product_favorite.findAll({
        where: {
          user_id: userId,
        },
        include: [
          {
            model: db.Product,
            as: "product",
            include: [{ all: true }],
          },
        ],
        row: true,
        nest: true,
      });

      return updatedData;
    } else {
      return null;
    }
  },
  getFavInDb: async (userId) => {
    try {
      const favorites = await db.Product_favorite.findAll({
        where: {
          user_id: userId,
        },
        include: [
          {
            model: db.Product,
            as: "product",
            include: [{ all: true }],
          },
        ],
        row: true,
        nest: true,
      });

      return favorites;
    } catch (error) {
      console.log(error);
    }
  },
};
