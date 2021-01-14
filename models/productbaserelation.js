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
      this.myAssociation = this.belongsTo(models.Category, { as: 'category', foreignKey: "categoryId",})
      this.myAssociation = this.belongsTo(models.Brand, { as: 'brand', foreignKey: "brandId",})
      this.myAssociation = this.belongsTo(models.Collection, { as: 'collection', foreignKey: "collectionId",})
      this.myAssociation = this.hasMany(models.Product, { as: 'products', foreignKey: "productBaseRelationId",})
    }
  };
  ProductBaseRelation.init({
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductBaseRelation',
  });
  return ProductBaseRelation;
};