const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Optic";
  const cols = {
    name: dataTypes.STRING,

    email: dataTypes.STRING,

    address: dataTypes.STRING,

    postalCode: dataTypes.INTEGER,

    province: dataTypes.STRING,

    schedule: dataTypes.STRING,

    cellPhone: dataTypes.INTEGER,

    shippingWay: dataTypes.STRING,

    logo: dataTypes.STRING,

    orderDetail_id: dataTypes.INTEGER,

    active: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Optic = sequelize.define(alias, cols, config);
  Optic.associate = (models) => {
    Optic.belongsTo(models.Order_Detail, {
      as: "orderDetail",
      foreignKey: "orderDetail_id",
    });
  };

  return Optic;
};
