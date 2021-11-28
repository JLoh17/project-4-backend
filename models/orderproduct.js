'use strict';
const { Model } = require('sequelize');
const OrderProductSchema = require('./schema/order_product')

module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    static associate(models) {
      OrderProduct.Product = this.belongsTo(models.Product)
      OrderProduct.Order = this.belongsTo(models.Order)
    }
  };

  const { tableAttributes } = OrderProductSchema (sequelize, DataTypes)
  OrderProduct.init(tableAttributes, {
    sequelize,
    modelName: 'OrderProduct',
  });

  return OrderProduct;
};
