"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("right_eyes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      eyeRight_SPH_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "spheres",
          key: "id",
        },
      },
      eyeRight_CYL_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cylinders",
          key: "id",
        },
      },
      axisRightEye: {
        type: Sequelize.REAL,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("right_eyes");
  },
};
