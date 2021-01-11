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
    }
  };
  Product.init({
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Product',
  });

  return Product;
};