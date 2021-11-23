'use strict';
const { Model } = require('sequelize');
const OrderProductSchema = require('./schema/order_product')

module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    static associate(models) {
      // define association here
    }
  };

  const { tableAttributes } = OrderProductSchema (sequelize, DataTypes)
  OrderProduct.init(tableAttributes, {
    sequelize,
    modelName: 'OrderProduct',
  });

  return OrderProduct;
};
