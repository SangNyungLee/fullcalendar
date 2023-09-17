const { DataTypes } = require("sequelize");

const calendar = (sequelize) => {
  const calendar = sequelize.define("calendar", {
    id :{
        type: DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement: true
    },
    username :{
        type : DataTypes.STRING,
        allowNull : true,

    },
    title:{
        type : DataTypes.STRING
    },
    start:{
        type : DataTypes.STRING,
    },
    end:{
        type : DataTypes.STRING,
    },
    backgroundColor:{
        type: DataTypes.STRING
    },
  });
  return calendar;
};
module.exports = calendar;
