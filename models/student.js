'use strict';

module.exports = function (sequelize, DataTypes) {
  var students = sequelize.define("students", {
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
     type:Sequelize.DATE,
     allowNull:false,
     }



  });
  return students;
}