'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProfile.belongsTo(models.User)
    }
  }
  UserProfile.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg : "First Name cannot empty"
        },
        notNull:{
          msg : "First Name is required!"
        },
        isAlpha:{
          msg: "First Name letter only"
        }
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg : "First Name cannot empty"
        },
        notNull:{
          msg : "First Name is required!"
        },
        isAlpha:{
          msg: "First Name letter only"
        }
      },
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty:{
          msg : "User Id cannot empty"
        },
        notNull:{
          msg : "User Id is required!"
        },
        isInt:{
          msg: "User Id must Number"
        }
      },
    }
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};