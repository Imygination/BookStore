"use strict";
const { Model } = require("sequelize");
const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Product, { through: "Transactions" });
      User.hasOne(models.UserProfile);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false, // Jika email wajib diisi
        unique: true,
        validate: {
          notEmpty:{
            msg : "email cannot empty!"
          },
          notNull:{
            msg : "email is required!"
          },
          isEmail: {
            args: true,
            msg: "Harus email yang valid",
          },
        },
      },
      password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg : "password cannot empty!"
        },
        notNull:{
          msg : "password is required!"
        },
        len: {
          args: [8],
          msg: 'Password minimal 8 karakter',
        }
      }},
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:{
            msg : "Role cannot empty"
          },
          notNull:{
            msg : "Role is required!"
          },
          isAlpha:{
            msg: "Role letter only"
          }
        },
      }
    },
    {
    sequelize,
    modelName: "User",
    hooks: {
      beforeCreate(instance, options){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(instance.password, salt);
        instance.password = hash;
      }
    }
    }
  );
  return User;
};
