const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Pupillary_Distance";
  const cols = {
    pupillaryDistance: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Pupillary_Distance = sequelize.define(alias, cols, config);
  Pupillary_Distance.associate = (models) => {
    Pupillary_Distance.hasMany(models.Value_Eye, {
      as: "valueEye",
      foreignKey: "pupillaryDistance_id",
    });
  };

  return Pupillary_Distance;
};
