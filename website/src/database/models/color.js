const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Color"; // esto debería estar en singular
  const cols = {
    name: dataTypes.STRING,
    product_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Color = sequelize.define(alias, cols, config);

  Color.associate = function (models) {
    Color.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });
  };

  return Color;
};
