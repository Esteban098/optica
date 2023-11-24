"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Materials", [
      {
        material: "Acetato",
        active: 1,
      },
      {
        material: "Monel",
        active: 1,
      },
      {
        material: "Titanio",
        active: 1,
      },
      {
        material: "Beta-titanio",
        active: 1,
      },
      {
        material: "Berilio",
        active: 1,
      },
      {
        material: "Acero inoxidable",
        active: 1,
      },
      {
        material: "Aluminio",
        active: 1,
      },
      {
        material: "Plata",
        active: 1,
      },
      {
        material: "Madera",
        active: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Materials", null, {});
  },
};
