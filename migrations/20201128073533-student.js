'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('students',{

     id:{
     primaryKey:true,
     autoIncrement:true,
     type:Sequelize.INTEGER,
     allowNull:false,
     },
     name:{
     type:Sequelize.STRING,
     allowNull:false,
     },
     phoneNumber:{
     type:Sequelize.STRING,
     allowNull:false,
     },
     createAt:{
     type:Sequelize.DATE,
     allowNull:false,
     default: new Date()
     },
     updateAt:{
     type:Sequelize.DATE,
     allowNull:false,
     }


  })

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
     return queryInterface.dropTable('students');
  }
};
