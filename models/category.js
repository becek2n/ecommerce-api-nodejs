'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.myAssociation = this.hasMany(models.ProductBaseRelation, { as: 'category_products', foreignKey: "category_id",})
      this.myAssociation = this.belongsToMany(models.Brand, { through: models.ProductBaseRelation, foreignKey: "category_id", })
      this.myAssociation = this.belongsToMany(models.Collection, { through: models.ProductBaseRelation, foreignKey: "category_id", })
    }
  };
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};