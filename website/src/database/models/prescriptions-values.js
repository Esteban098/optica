const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Prescription_Value";
  const cols = {
    prescription_id: dataTypes.INTEGER,
    valueEye_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Prescription_Value = sequelize.define(alias, cols, config);
  Prescription_Value.associate = (models) => {
    Prescription_Value.belongsTo(models.Prescription, {
      as: "prescription",
      foreignKey: "prescription_id",
    });
    Prescription_Value.belongsTo(models.Value_Eye, {
      as: "valueEye",
      foreignKey: "valueEye_id",
    });
    //no es necesario este modelo , pero como necesito hacer una consulta de esta tabla SI lo es
  };
  return Prescription_Value;
};
