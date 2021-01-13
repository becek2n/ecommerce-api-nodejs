'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.myAssociation = this.belongsTo(models.Product, { as: 'product', foreignKey: "product_id",})
    }
  };
  ProductImage.init({
    product_id: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    underscored: true,
    sequelize,
    modelName: 'ProductImage',
  });
  return ProductImage;
};