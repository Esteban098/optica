const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Material";
  const cols = {
    material: dataTypes.STRING,
    active: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Material = sequelize.define(alias, cols, config);
  Material.associate = (models) => {
    Material.hasMany(models.Product, {
      as: "product",
      foreignKey: "material_id",
    });
  };

  return Material;
};
