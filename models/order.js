'use strict';
const { Model } = require('sequelize');
const OrderSchema = require ('./schema/order')

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
    }
  };

  const { tableAttributes } = OrderSchema (sequelize, DataTypes)
  Order.init(tableAttributes, {
    sequelize,
    modelName: 'Order',
  });

  return Order;
};
