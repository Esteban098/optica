"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Value_Eyes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      rightEye_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "right_eyes",
          key: "id",
        },
      },
      leftEye_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "left_eyes",
          key: "id",
        },
      },
      pupillaryDistance_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "pupillary_distances",
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
    await queryInterface.dropTable("Value_Eyes");
  },
};
