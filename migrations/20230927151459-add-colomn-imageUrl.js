'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
   return queryInterface.addColumn('Products','imageUrl',
   {
      allowNull: false,
      type : DataTypes.STRING,
   })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

   down (queryInterface, Sequelize) {
   return queryInterface.removeColumn('Products','imageUrl',{})


  }
};
