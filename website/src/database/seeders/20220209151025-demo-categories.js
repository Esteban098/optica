"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        categoryName: "MEN",
        active: 1,
      },
      {
        categoryName: "WOMEN",
        active: 1,
      },
      {
        categoryName: "CHILDREN",
        active: 1,
      },
      {
        categoryName: "SUN",
        active: 1,
      },
      {
        categoryName: "READ",
        active: 1,
      },
      {
        categoryName: "RECETADOS",
        active: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
