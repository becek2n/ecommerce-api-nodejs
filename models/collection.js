'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.myAssociation = this.hasMany(models.ProductBaseRelation, { foreignKey: "collectionId",})
      this.myAssociation = this.belongsToMany(models.Brand, { through: models.ProductBaseRelation, foreignKey: "collectionId", })
      this.myAssociation = this.belongsToMany(models.Category, { through: models.ProductBaseRelation, foreignKey: "collectionId", })
    }
  };
  Collection.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collection',
  });
  return Collection;
};