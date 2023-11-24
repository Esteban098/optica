const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Value_Eye";
  const cols = {
    rightEye_id: dataTypes.INTEGER,
    leftEye_id: dataTypes.INTEGER,
    pupillaryDistance_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Value_Eye = sequelize.define(alias, cols, config);
  Value_Eye.associate = (models) => {
    Value_Eye.belongsTo(models.Right_Eye, {
      as: "rightEye",
      foreignKey: "rightEye_id",
    });

    Value_Eye.belongsTo(models.Left_Eye, {
      as: "leftEyes",
      foreignKey: "leftEye_id",
    });

    Value_Eye.belongsTo(models.Pupillary_Distance, {
      as: "pupillaryDistance",
      foreignKey: "pupillaryDistance_id",
    });

    Value_Eye.belongsToMany(models.Prescription, {
      as: "prescription",
      foreignKey: "valueEye_id",
      through: "prescription_values",
      // otherKey: "prescription_id",
    });

    // Value_Eye.hasOne(models.Prescription_Value, {
    //   as: "prescriptionValue",
    //   foreignKey: "valueEye_id",
    // });
  };
  return Value_Eye;
};
