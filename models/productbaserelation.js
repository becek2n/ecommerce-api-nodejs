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
      this.myAssociation = this.belongsTo(models.Category, { as: 'category', foreignKey: "category_id",})
      this.myAssociation = this.belongsTo(models.Brand, { as: 'brand', foreignKey: "brand_id",})
      this.myAssociation = this.belongsTo(models.Collection, { as: 'collection', foreignKey: "collection_id",})
      this.myAssociation = this.hasMany(models.Product, { as: 'products', foreignKey: "productbaserelation_id",})
    }
  };
  ProductBaseRelation.init({
    brand_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    collection_id: DataTypes.INTEGER
  }, {
    underscored: true,
    sequelize,
    modelName: 'ProductBaseRelation',
  });
  return ProductBaseRelation;
};