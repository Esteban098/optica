const db = require("../../database/models");

const {
  getProductsById,
  getAllProductsAllAssociations,
  getAllProductsMen,
  getAllProductsWomen,
  getAllProductsChildren,
  getAllProductsSun,
  getAllProductsRead,
  getAllProductsRecetados,
  getOrders,
  getOrderById,
  metricsUser,
  metricsProduct,
  metricsOrder,
  getFavInDb,
  getAllCategories,
} = require("../../services/api/apiProducts");
const { addToAndRemoveCar } = require("../../services/products");

module.exports = {
  list: async (req, res) => {
    try {
      const page = req.query.page;
      const response = await getAllProductsAllAssociations(page);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  detail: async (req, res) => {
    try {
      const response = await getProductsById(req.params.productId);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  listOrders: async (req, res) => {
    const page = req.query.page;
    const orders = await getOrders(page);
    res.json(orders);
  },
  getOrder: async (req, res) => {
    const id = req.params.id;
    const order = await getOrderById(id);
    res.json(order);
  },

  getMetricsUser: async (req, res) => {
    const metrics = await metricsUser();
    res.json(metrics);
  },
  getMetricsProduct: async (req, res) => {
    const metrics = await metricsProduct();
    res.json(metrics);
  },
  getMetricsOrder: async (req, res) => {
    const metrics = await metricsOrder();
    res.json(metrics);
  },
  men: async (req, res) => {
    try {
      const response = await getAllProductsMen();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  women: async (req, res) => {
    try {
      const response = await getAllProductsWomen();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  children: async (req, res) => {
    try {
      const response = await getAllProductsChildren();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  sun: async (req, res) => {
    try {
      const response = await getAllProductsSun();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  read: async (req, res) => {
    try {
      const response = await getAllProductsRead();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  recetados: async (req, res) => {
    try {
      const response = await getAllProductsRecetados();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  categories: async (req, res) => {
    try {
      const response = await getAllCategories();
      res.json(response);
    } catch (error) {
      console.log(error);
      res.send("algo salio mal");
    }
  },
  favorite: async (req, res) => {
    try {
      //sacara de aca porque no es una api
      const productId = req.params.productId;
      let userId;
      if (!req.session.userLogged) {
        res.redirect("/user/login");
      } else {
        userId = req.session.userLogged.id;
        await addToAndRemoveCar(userId, productId);
        res.redirect("back");
      }
    } catch (error) {
      console.log(error);
    }
  },
};
