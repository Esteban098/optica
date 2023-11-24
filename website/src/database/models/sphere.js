const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Sphere";
  const cols = {
    sphere: dataTypes.DOUBLE,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Sphere = sequelize.define(alias, cols, config);
  Sphere.associate = (models) => {
    Sphere.hasMany(models.Right_Eye, {
      as: "RightEye",
      foreignKey: "eyeRight_SPH_id",
    });
    Sphere.hasMany(models.Left_Eye, {
      as: "LeftEye",
      foreignKey: "eyeLeft_SPH_id",
    });
  };
  return Sphere;
};
