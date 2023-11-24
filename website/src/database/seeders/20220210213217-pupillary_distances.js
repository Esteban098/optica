"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Pupillary_distances", [
      {
        pupillaryDistance: 46,
      },
      { pupillaryDistance: 47 },
      { pupillaryDistance: 48 },
      { pupillaryDistance: 49 },
      { pupillaryDistance: 50 },
      { pupillaryDistance: 51 },
      { pupillaryDistance: 52 },
      { pupillaryDistance: 53 },
      { pupillaryDistance: 54 },
      { pupillaryDistance: 55 },
      { pupillaryDistance: 56 },
      { pupillaryDistance: 57 },
      { pupillaryDistance: 58 },
      { pupillaryDistance: 59 },
      { pupillaryDistance: 60 },
      { pupillaryDistance: 61 },
      { pupillaryDistance: 62 },
      { pupillaryDistance: 63 },
      { pupillaryDistance: 64 },
      { pupillaryDistance: 65 },
      { pupillaryDistance: 66 },
      { pupillaryDistance: 67 },
      { pupillaryDistance: 68 },
      { pupillaryDistance: 69 },
      { pupillaryDistance: 70 },
      { pupillaryDistance: 71 },
      { pupillaryDistance: 72 },
      { pupillaryDistance: 73 },
      { pupillaryDistance: 74 },
      { pupillaryDistance: 75 },
      { pupillaryDistance: 76 },
      { pupillaryDistance: 77 },
      { pupillaryDistance: 78 },
      { pupillaryDistance: 79 },
      { pupillaryDistance: 80 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pupillary_distances", null, {});
  },
};
