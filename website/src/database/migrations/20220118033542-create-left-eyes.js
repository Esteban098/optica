"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Left_Eyes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      eyeLeft_SPH_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "spheres",
          key: "id",
        },
      },
      eyeLeft_CYL_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cylinders",
          key: "id",
        },
      },
      axisLeftEye: {
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
    await queryInterface.dropTable("Left_Eyes");
  },
};
