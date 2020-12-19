'use strict';

module.exports = function (sequelize, DataTypes) {
  var teachers = sequelize.define("teachers", {
     id:{
     primaryKey:true,
     autoIncrement:true,
     type:DataTypes.INTEGER,
     allowNull:false,
     },
     name:{
     type:DataTypes.STRING,
     allowNull:false,
     },
     department:{
     type:DataTypes.STRING,
     allowNull:false,
     },
     phoneNumber:{
     type:DataTypes.STRING,
     allowNull:false,
     },
     createAt:{
     type:DataTypes.DATE,
     allowNull:false,
     default: new Date()
     },
     updateAt:{
     type:DataTypes.DATE,
     allowNull:false,
     }



  });
  return teachers;
}