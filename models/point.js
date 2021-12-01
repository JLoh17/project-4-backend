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
    hooks: {
      afterSave: async (instance) => {
        const points = await Point.findAll({
          where: {
            UserId: instance.UserId
          }
          // TODO: get the sum from unit 2
        })

        console.log(points)

        const user = await User.findOne({
          where: {
            id: instance.UserId
          }
        })

        // make sure you are actually getting the number...could be points.points, check the console.log
        await user.update({ points })
      }
    },
    sequelize,
    modelName: 'Point',
  });

  return Point;
};
