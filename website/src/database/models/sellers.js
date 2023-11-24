const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Seller";
  const cols = {
    name: dataTypes.STRING,

    cellPhone: dataTypes.INTEGER,

    shippingWay: dataTypes.STRING,

    orderDetail_id: dataTypes.INTEGER,

    active: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Seller = sequelize.define(alias, cols, config);
  //preguntar lo mismo con sellers , si corresponde o sirve hacerlo asi

  Seller.associate = (models) => {
    Seller.belongsTo(models.Order_Detail, {
      as: "orderDetail",
      foreignKey: "orderDetail_id",
    });
  };

  return Seller;
};
