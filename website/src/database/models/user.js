const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "User"; // esto debería estar en singular
  const cols = {
    name: dataTypes.STRING,

    lastName: dataTypes.STRING,

    country: dataTypes.STRING,

    dateBirth: dataTypes.DATE,

    country: dataTypes.STRING,

    email: dataTypes.STRING,

    password: dataTypes.STRING,

    confirmPassword: dataTypes.STRING,

    streetAddress: dataTypes.STRING,

    buySell: dataTypes.STRING,

    favoriteCategory: dataTypes.STRING,

    avatar: dataTypes.STRING,

    active: dataTypes.INTEGER,

    admin: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const User = sequelize.define(alias, cols, config);

  User.associate = function (models) {
    User.belongsToMany(models.Product, {
      as: "product",
      through: "product_favorites",
      foreignKey: "user_id",
    });
    User.hasMany(models.Product_favorite, {
      as: "productFavorite",
      foreignKey: "user_id",
    });
    User.hasMany(models.Order, {
      as: "order",
      foreignKey: "user_id",
    });
  };
  return User;
};
