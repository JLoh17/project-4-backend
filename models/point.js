'use strict';
const { Model } = require('sequelize');
const PointSchema = require('./schema/point')

module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    static associate(models) {
      // define association here
    }
  };

  const { tableAttributes } = PointSchema (sequelize, DataTypes)
  Point.init(tableAttributes, {
    sequelize,
    modelName: 'Point',
  });

  return Point;
};
