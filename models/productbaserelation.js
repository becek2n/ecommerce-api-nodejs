'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductBaseRelation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductBaseRelation.init({
    brand_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    collection_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductBaseRelation',
  });
  return ProductBaseRelation;
};