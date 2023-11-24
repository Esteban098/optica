const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Product_favorite"; // esto debería estar en singular
  const cols = {
    product_id: dataTypes.INTEGER,
    user_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Product_favorite = sequelize.define(alias, cols, config);

  Product_favorite.associate = function (models) {
    //la clave foranea en la tabla Price
    //en la tabla Price el campo que hace referencia a la foreignKey del precio es price_id
    Product_favorite.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });
    Product_favorite.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id",
    });
  };
  return Product_favorite;
};
