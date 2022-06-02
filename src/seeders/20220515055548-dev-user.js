"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          social_id:"",
          first_name: "Jane",
          second_name: "Liao",
          email: "admin@gmail.com",
          password:
            "$2a$10$nxqns63p7BaSqgHC8.0W3eu/scLpIIeLGs9El/ZDfmcmCRjKjFH6e",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
