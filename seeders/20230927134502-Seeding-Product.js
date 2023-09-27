"use strict";
const { readFileSync } = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    let data = JSON.parse(readFileSync("./dataProduct.json", "utf-8"));
    data.map((e) => {
      return (e.createdAt = e.updatedAt = new Date());
    });
    // console.log(data);

    return  queryInterface.bulkInsert("Products", data, {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
