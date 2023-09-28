"use strict";
const { Model } = require("sequelize");
const formatRp = require("../helper/helper");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.User, { through: "Transactions" });
    }

    incrementStock(stock) {
      return (stock = stock - 1);
    }

    get toIdr() {
      return formatRp(this.price);
    }
  }
  
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg : "Name cannot empty"
        },
        notNull:{
          msg : "Name is required!"
        },
        len: {
          args: [1,100],
          msg: "Name is too long, maksimum caracter 1 - 100"
        }
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty:{
          msg : "Price cannot empty"
        },
        notNull:{
          msg : "Price is required!"
        },
        isInt:{
          msg: "Price must Number"
        }
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg : "Description cannot empty"
        },
        notNull:{
          msg : "Description is required!"
        },
        len: {
          args: [1,200],
          msg: "Description is too long, maksimum caracter 1 - 200"
        }
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty:{
          msg : "Stock cannot empty"
        },
        notNull:{
          msg : "Stock is required!"
        },
        isInt:{
          msg: "Stock must Number"
        }
      },
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg : "Image Url cannot empty"
        },
        notNull:{
          msg : "Image Url is required!"
        },
        isUrl: {
          msg: "Image Url must valid url"
        }
      },
    },
  }, {
    sequelize,
    modelName: 'Product',
  });

  return Product;
};
