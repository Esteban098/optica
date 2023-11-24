const db = require("../database/models");
const { getFavInDb, destroyFav } = require("../services/products");
const productsServices = require("../services/products");

module.exports = {
  home: async (req, res) => {
    const products = await productsServices.listProductsHome();

    res.render("main/home", { products });
  },
  search: (req, res) => {
    /*  const query = req.query.search;
    const searchar = productsServices.search(query); */
    res.render("products/results");
  },

  howToRead: (req, res) => {
    res.render("main/how-to-read");
  },

  car: async (req, res) => {
    let userId;
    if (!req.session.userLogged) {
      res.redirect("/user/login");
    }
    if (req.session.userLogged) {
      userId = req.session.userLogged.id;
    }
    const productsFavorite = [];
    const findFavoriteProdUser = await getFavInDb(userId);
    console.log(findFavoriteProdUser, 21231);
    if (findFavoriteProdUser) {
      console.log(findFavoriteProdUser.length);
      res.render("carrito.ejs", { productsFav: findFavoriteProdUser });
    }
  },
  deleteFavoriteCar: async (req, res) => {
    const productId = req.params.productId;
    let userId;
    if (!req.session.userLogged) {
      res.redirect("/user/login");
    }
    if (req.session.userLogged) {
      userId = req.session.userLogged.id;
    }
    const dataSinElemento = await destroyFav(userId, productId);
    if (dataSinElemento) {
      res.render("carrito.ejs", { productsFav: dataSinElemento });
    }
  },
  men: (req, res) => {
    res.render("products/men");
  },
  women: (req, res) => {
    res.render("products/women");
  },
  children: (req, res) => {
    res.render("products/children");
  },
  prueba: async (req, res) => {
    const producto = await db.Product.findOne({
      where: {
        id: 50,
      },
      include: [
        { association: "image" },
        { association: "size" },
        { association: "material" },
        { association: "price" },
        { association: "color" },
        "category",
      ],
    });
    if (producto.active === 1) {
      console.log(producto);
      res.send(producto);
    } else {
      res.send("Ese producto no se encuentra activado");
    }
  },
  prescription: function (req, res) {
    res.render("prescription");
  },
};
