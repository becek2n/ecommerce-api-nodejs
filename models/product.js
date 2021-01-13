'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.myAssociation = this.hasMany(models.ProductImage, { as: 'images', foreignKey: "product_id",})
      this.myAssociation = this.belongsTo(models.ProductBaseRelation, { as: 'base_product', foreignKey: "productbaserelation_id",})
    }
  };
  Product.init({
    productbaserelation_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
  }, {
    underscored: true,
    sequelize,
    modelName: 'Product',
  });

  return Product;
};