'use strict';
const { Model } = require('sequelize');
const ProductSchema = require('./schema/product')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
    }
  };

  const { tableAttributes } = ProductSchema (sequelize, DataTypes)
  Product.init(tableAttributes, {
    sequelize,
    modelName: 'Product',
  });

  return Product;
};
