const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Size";
  const cols = {
    size: dataTypes.STRING,

    active: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Size = sequelize.define(alias, cols, config);

  Size.associate = (models) => {
    Size.hasMany(models.Product, {
      as: "product",
      foreignKey: "size_id",
    });
  };

  return Size;
};
