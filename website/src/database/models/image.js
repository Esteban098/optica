const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Image";
  const cols = {
    filename: dataTypes.STRING,
    format: dataTypes.STRING,
    product_id: dataTypes.INTEGER,
    active: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Image = sequelize.define(alias, cols, config);
  Image.associate = (models) => {
    //al belongsTo hay que leerlo al revés se lee =>
    //(en la tabla Image el campo que hacer referencia a la tabla Product es image_id osea la foreignKey)
    Image.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });
  };
  return Image;
};
