'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
  return  queryInterface.addColumn('UserProfiles','address',{
    type: DataTypes.STRING,
    allowNull : false
    })

  },

   down (queryInterface, Sequelize) {
  return  queryInterface.removeColumn('UserProfiles',null)

  }
};
