"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Sizes", [
      {
        size: "S",
        active: 1,
      },
      {
        size: "M",
        active: 1,
      },
      {
        size: "X",
        active: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Sizes", null, {});
  },
};
