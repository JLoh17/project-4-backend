'use strict';
const { Model } = require('sequelize');
const PointSchema = require('./schema/point')

module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    static associate(models) {
      Point.User = this.belongsTo(models.User)
      Point.Order = this.belongsTo(models.Order)
    }
  };

  const { tableAttributes } = PointSchema (sequelize, DataTypes)
  Point.init(tableAttributes, {
    sequelize,
    modelName: 'Point',
  });

  return Point;
};
