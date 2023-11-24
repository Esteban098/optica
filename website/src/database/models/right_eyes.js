const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Right_Eye";
  const cols = {
    eyeRight_SPH_id: dataTypes.INTEGER,
    eyeRight_CYL_id: dataTypes.INTEGER,
    axisRightEye: dataTypes.REAL,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Right_Eye = sequelize.define(alias, cols, config);
  Right_Eye.associate = (models) => {
    Right_Eye.belongsTo(models.Sphere, {
      as: "sphere",
      foreignKey: "eyeRight_SPH_id",
    });

    Right_Eye.belongsTo(models.Cylinder, {
      as: "cylinder",
      foreignKey: "eyeRight_CYL_id",
    });
  };
  return Right_Eye;
};
