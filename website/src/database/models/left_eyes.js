const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Left_Eye";
  const cols = {
    eyeLeft_SPH_id: dataTypes.INTEGER,
    eyeLeft_CYL_id: dataTypes.INTEGER,
    axisLeftEye: dataTypes.REAL,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Left_Eye = sequelize.define(alias, cols, config);
  Left_Eye.associate = (models) => {
    Left_Eye.belongsTo(models.Sphere, {
      as: "sphere",
      foreignKey: "eyeLeft_SPH_id",
    });

    Left_Eye.belongsTo(models.Cylinder, {
      as: "cylinder",
      foreignKey: "eyeLeft_CYL_id",
    });
  };
  return Left_Eye;
};
