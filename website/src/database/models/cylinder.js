const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Cylinder";
  const cols = {
    cylinder: dataTypes.DOUBLE,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Cylinder = sequelize.define(alias, cols, config);
  Cylinder.associate = (models) => {
    Cylinder.hasMany(models.Right_Eye, {
      as: "RightEye",
      foreignKey: "eyeRight_CYL_id",
    });
    Cylinder.hasMany(models.Left_Eye, {
      as: "LeftEye",
      foreignKey: "eyeLeft_CYL_id",
    });
  };
  return Cylinder;
};
