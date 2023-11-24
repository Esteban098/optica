const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Price"; // esto debería estar en singular
  const cols = {
    price: dataTypes.DOUBLE,

    discount: dataTypes.INTEGER,

    priceDiscount: dataTypes.DOUBLE,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Price = sequelize.define(alias, cols, config);

  Price.associate = function (models) {
    //la clave foranea en la tabla Price
    //en la tabla Price el campo que hace referencia a la foreignKey del precio es price_id
    Price.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });
  };
  return Price;
};
