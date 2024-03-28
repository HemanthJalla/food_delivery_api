'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pricing extends Model {
    static associate(models) {
      Pricing.belongsTo(models.Organization, { foreignKey: 'organizationId' });
      Pricing.belongsTo(models.Item, { foreignKey: 'itemTypeId' });
    }
  };
  Pricing.init({
    organizationId: DataTypes.INTEGER,
    itemTypeId: DataTypes.INTEGER,
    zone: DataTypes.STRING,
    baseDistanceInKm: DataTypes.FLOAT,
    kmPrice: DataTypes.FLOAT,
    fixPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Pricing',
  });
  return Pricing;
};
