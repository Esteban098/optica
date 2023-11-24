const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Order";
  const cols = {
    user_id: dataTypes.INTEGER,
    orderDate: dataTypes.DATE,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Order = sequelize.define(alias, cols, config);

  Order.associate = function (models) {
    Order.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id",
    });
    Order.belongsToMany(models.Product, {
      as: "product",
      through: "order_details",
      foreignKey: "order_id",
      // otherKey: "product_id",
    });
    Order.hasMany(models.Order_Detail, {
      as: "orderDetail",
      foreignKey: "order_id",
    });
  };
  return Order;
};
