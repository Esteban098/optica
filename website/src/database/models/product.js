const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Product"; // esto debería estar en singular
  const cols = {
    name: dataTypes.STRING,

    shortDescription: dataTypes.STRING,

    longDescription: dataTypes.TEXT,

    size_id: dataTypes.INTEGER,

    material_id: dataTypes.INTEGER,

    active: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    //__hasMany se lee => en el modelo Price la clave foránea que hace referencia al modelo Product es price_id
    Product.hasMany(models.Price, {
      as: "price",
      foreignKey: "product_id",
    });
    Product.hasMany(models.Color, {
      as: "color",
      foreignKey: "product_id",
    });
    //la clave foránea de products en la tabla categories es product_id   y...
    //la otherKey es category_id, que visto desde la otra tabla seria al revés,
    Product.belongsToMany(models.Category, {
      as: "category",
      through: "products_category",
      foreignKey: "product_id",
      otherKey: "category_id",
    });

    Product.hasMany(models.Image, {
      as: "image",
      foreignKey: "product_id",
    });

    Product.belongsTo(models.Material, {
      as: "material",
      foreignKey: "material_id",
    });

    Product.belongsToMany(models.User, {
      as: "user",
      through: "product_favorites",
      foreignKey: "product_id",
    });
    Product.hasMany(models.Product_favorite, {
      as: "productFavorite",
      foreignKey: "product_id",
    });

    Product.belongsToMany(models.Order, {
      as: "order",
      through: "order_details",
      foreignKey: "product_id",
      // otherKey: "order_id",
    });

    Product.belongsTo(models.Size, {
      as: "size",
      foreignKey: "size_id",
    });
    Product.hasMany(models.Order_Detail, {
      as: "orderDetail",
      foreignKey: "product_id",
    });
  };

  return Product;
};
