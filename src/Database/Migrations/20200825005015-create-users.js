'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user: {
        type: Sequelize.STRING(12),
        unique: true,
        allowNull: false
      },
      pass: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      email: {
        type : Sequelize.STRING(50),
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      check: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('users');
  }
};
