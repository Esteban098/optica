"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("product_favorites", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        paranoid: true,
      },
      product_id: {
        type: Sequelize.INTEGER,

        paranoid: true,
        references: {
          model: "products",
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        paranoid: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("product_favorites");
  },
};
