const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Order_Detail";
  const cols = {
    order_id: dataTypes.INTEGER,
    product_id: dataTypes.INTEGER,
    prescription_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Order_Detail = sequelize.define(alias, cols, config);
  Order_Detail.associate = (models) => {
    //preguntar  * Order_Detail.hasOne(models.Optic * si esta bien , y sino , como se hace ?
    Order_Detail.hasOne(models.Optic, {
      // pongo hasOne porque con esa orden solo vale para una óptica o para un seller
      as: "seller",
      as: "optic",
      foreignKey: "orderDetail_id",
    });
    Order_Detail.hasOne(models.Seller, {
      as: "seller",
      foreignKey: "orderDetail_id",
    });

    Order_Detail.belongsTo(models.Prescription, {
      as: "prescription",
      foreignKey: "prescription_id",
    });
    Order_Detail.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });
    Order_Detail.belongsTo(models.Order, {
      as: "order",
      foreignKey: "order_id",
    });
  };
  return Order_Detail;
};
