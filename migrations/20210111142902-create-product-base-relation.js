'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductBaseRelations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Brands",
          },
          key: 'id'
        }
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Categories",
          },
          key: 'id'
        }
      },
      collection_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Collections",
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductBaseRelations');
  }
};