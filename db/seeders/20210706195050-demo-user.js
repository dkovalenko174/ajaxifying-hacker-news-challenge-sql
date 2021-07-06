'use strict';
const randomProfile = require('random-profile-generator');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const arr = []
   for(let i = 0; i < 20; i++){
     let post = {
      title:'Lorem ipsum',
      content:' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      username: randomProfile.name(),
      commentCount: Math.floor(Math.random() * 1000),
      createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')
     };
     arr.push(post)
   }
     await queryInterface.bulkInsert('Posts', arr, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Posts', null, {});
  }
};
