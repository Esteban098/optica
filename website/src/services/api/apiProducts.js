const db = require("../../database/models");
module.exports = {
  getProductsById: async (id) => {
    try {
      const product = await db.Product.findByPk(id, {
        include: ["image", "size", "material", "price", "color", "category"],
      });
      let status;
      let statusCode;
      if (product) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: product ? 1 : "",
          url: product ? `/api/product/${product.id}` : "",
        },
        data: product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  getAllProductsAllAssociations: async (query) => {
    try {
      const limit = 12;
      const page = query - 1;
      const { count, rows } = await db.Product.findAndCountAll({
        include: ["image", "size", "material", "price", "color", "category"],
        offset: page * limit,
        limit: limit,
        distinct: true,
      });
      let status;
      let statusCode;
      if (rows) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          //  hasNext: page * limit + limit < count,
          count: count,
          url: rows ? "/api/products" : "",
        },
        data: rows,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getOrders: async (query) => {
    try {
      const limit = 10;
      const page = query - 1;
      //   let offset;
      //   countOrd < 10 ? (offset = countOrd) : (offset = page * limit);
      const { count, rows } = await db.Order_Detail.findAndCountAll({
        include: [
          {
            model: db.Prescription,
            as: "prescription",
            include: [
              {
                model: db.Value_Eye,
                as: "valueEye",
                include: [{ all: true, include: [{ all: true }] }],
              },
            ],
          },
          {
            model: db.Product,
            as: "product",
            include: [
              "image",
              "size",
              "material",
              "price",
              "color",
              "category",
            ],
          },
          {
            model: db.Order,
            as: "order",
            include: [
              {
                model: db.User,
                as: "user",
                attributes: {
                  exclude: ["password", "confirmPassword", "admin"],
                },
              },
            ],
          },
        ],
        distinct: true,
        offset: page * limit,
        limit: limit,
      });
      let status;
      let statusCode;
      if (rows) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          count: count,
          statusCode: statusCode,
          url: `/api/product/orders`,
        },
        data: rows,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getOrderById: async (id) => {
    try {
      const order = await db.Order_Detail.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: db.Prescription,
            as: "prescription",
            include: [
              {
                model: db.Value_Eye,
                as: "valueEye",
                include: [{ all: true, include: [{ all: true }] }],
              },
            ],
          },
          {
            model: db.Product,
            as: "product",
            include: [
              "image",
              "size",
              "material",
              "price",
              "color",
              "category",
            ],
          },
          {
            model: db.Order,
            as: "order",
            include: [
              {
                model: db.User,
                as: "user",
                attributes: {
                  exclude: ["password", "confirmPassword", "admin"],
                },
              },
            ],
          },
        ],
      });
      let status;
      let statusCode;
      if (order) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          count: 1,
          statusCode: statusCode,
          url: `/api/product/orders`,
        },
        data: order,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  metricsUser: async () => {
    const { count, rows } = await db.User.findAndCountAll();

    return count;
  },
  metricsProduct: async () => {
    const { count, rows } = await db.Product.findAndCountAll();
    return count;
  },
  metricsOrder: async () => {
    const { count, rows } = await db.Order_Detail.findAndCountAll();
    return count;
  },

  getAllProductsMen: async () => {
    try {
      const productsMen = await db.Category.findAll({
        where: {
          categoryName: "MEN",
        },
        include: [
          {
            model: db.Product,
            as: "product",
            include: ["image", "price"],
          },
        ],
      });

      let status;
      if (productsMen[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsMen[0].product.length,
          url: "/api/products/men",
        },
        data: productsMen[0].product,
      };
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getAllProductsWomen: async () => {
    try {
      const productsWomen = await db.Category.findAll({
        where: {
          categoryName: "WOMEN",
        },
        include: [
          {
            model: db.Product,
            as: "product",
            include: ["image", "price"],
          },
        ],
      });
      let status;
      let statusCode;
      if (productsWomen[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsWomen[0].product.length,
          url: "/api/products/women",
        },
        data: productsWomen[0].product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getAllProductsChildren: async () => {
    try {
      const productsChildren = await db.Category.findAll({
        where: {
          categoryName: "CHILDREN",
        },
        include: [
          {
            model: db.Product,
            as: "product",
            include: ["image", "price"],
          },
        ],
      });
      let status;
      let statusCode;

      if (productsChildren[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsChildren[0].product.length,
          url: "/api/products/children",
        },
        data: productsChildren[0].product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getAllProductsSun: async () => {
    try {
      const productsSun = await db.Category.findAll({
        where: {
          categoryName: "SUN",
        },
        include: [
          {
            model: db.Product,
            as: "product",
            include: ["image", "price"],
          },
        ],
      });
      let status;
      let statusCode;
      if (productsSun[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsSun[0].product.length,
          url: "/api/products/sun",
        },
        data: productsSun[0].product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getAllProductsRead: async () => {
    try {
      const productsRead = await db.Category.findAll({
        where: {
          categoryName: "SUN",
        },
        include: [
          {
            model: db.Product,
            as: "product",
            include: ["image", "price"],
          },
        ],
      });
      let status;
      let statusCode;
      if (productsRead[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsRead[0].product.length,
          url: "/api/products/read",
        },
        data: productsRead[0].product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  getAllProductsRecetados: async () => {
    try {
      const productsRecetados = await db.Category.findAll({
        where: {
          categoryName: "RECETADOS",
        },
        include: [
          {
            model: db.Product,
            as: "product",
            include: ["image", "price"],
          },
        ],
      });

      let status;
      let statusCode;
      if (productsRecetados[0].product.length !== 0) {
        status = 200;
        statusCode = true;
      } else {
        status = 404;
        statusCode = false;
      }
      let response = {
        meta: {
          status: status,
          statusCode: statusCode,
          count: productsRecetados[0].product.length,
          url: "/api/products/read",
        },
        data: productsRecetados[0].product,
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getAllCategories: async () => {
    const categories = await db.Category.findAll({
      raw: true,
      nest: true,
    });
    let status;
    let statusCode;
    if (categories) {
      status = 200;
      statusCode = true;
    } else {
      status = 404;
      statusCode = false;
    }
    let response = {
      meta: {
        status: status,
        statusCode: statusCode,
        count: categories ? categories.length : null,
        url: "/api/products/categories",
      },
      data: categories,
    };
    return response;
  },
};
