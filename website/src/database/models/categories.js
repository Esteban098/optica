const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Category";
  const cols = {
    categoryName: dataTypes.STRING,
    active: dataTypes.INTEGER,
  };
  //los campos que pongo en los modelos son los que voy a poder usar con los métodos find y los métodos mágicos de sequelize,
  //si no los los declaro aca como por ejemplo los id que si tiene la migration , existe en la base , pero no tengo acceso desde el modelo
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Category = sequelize.define(alias, cols, config);
  Category.associate = function (models) {
    //la clave foránea de categories en la tabla product es category_id   y...
    //la otherKey es product_id, que visto desde la otra tabla seria al revés,
    Category.belongsToMany(models.Product, {
      as: "product",
      through: "products_category",
      foreignKey: "category_id",
      otherKey: "product_id",
    });
  };
  return Category;
};
