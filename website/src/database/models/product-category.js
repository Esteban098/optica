const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "productCategory"; // esto debería estar en singular
  const cols = {
    product_id: dataTypes.INTEGER,

    category_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };

  const productCategory = sequelize.define(alias, cols, config);
  return productCategory;
};
