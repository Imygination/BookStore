"use strict";
const { Model } = require("sequelize");
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
            msg : "email is required!"
          },
          isEmail: {
            args: true,
            msg: "Harus email yang valid",
          },
        },
      },
      password: {type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg : "password is required!"
        },
        len: {
          args: [8],
          msg: 'Password minimal 8 karakter',
        }
      }},
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
