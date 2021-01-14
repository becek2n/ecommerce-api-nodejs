'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.myAssociation = this.belongsToMany(models.Collection, { through: models.ProductBaseRelation, as: 'brand_collections', foreignKey: "brandId", })
      this.myAssociation = this.belongsToMany(models.Category, { through: models.ProductBaseRelation, as: 'brand_categories', foreignKey: "brandId", })
    }
  };
  Brand.init({
    name: DataTypes.STRING,
    thumbnail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};