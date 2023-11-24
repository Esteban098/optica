const sequelize = require("sequelize");
const order = require("./order");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Prescription";
  const cols = {
    name: dataTypes.STRING,
    status: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Prescription = sequelize.define(alias, cols, config);
  Prescription.associate = (models) => {
    Prescription.belongsToMany(models.Value_Eye, {
      as: "valueEye",
      foreignKey: "prescription_id",
      through: "prescription_values",
      // otherKey: "valueEye_id",
    });
    Prescription.hasOne(models.Order_Detail, {
      as: "orderDetail",
      foreignKey: "prescription_id",
    });

    // Prescription.hasOne(models.Prescription_Value, {
    //   as: "prescriptionValue",
    //   foreignKey: "prescription_id",
    // });
  };

  return Prescription;
};
