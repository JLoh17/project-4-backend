'use strict';
const { Model } = require('sequelize');
const ProductSchema = require('./schema/product')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.Carts = this.hasMany(models.Cart)
      Product.Users = this.belongsToMany(models.User, {through: 'Cart'})
      Product.Category = this.belongsTo(models.Category)
      Product.OrderProducts = this.hasMany(models.OrderProduct)
      Product.Orders = this.belongsToMany(models.Order, {through: 'OrderProduct'})
      Product.Images = this.hasMany(models.Image)
      Product.Wishlists = this.hasMany(models.Wishlist)
      Product.Users = this.belongsToMany(models.User, {through: 'Wishlist'})
    }
  };

  const { tableAttributes } = ProductSchema (sequelize, DataTypes)
  Product.init(tableAttributes, {
    sequelize,
    modelName: 'Product',
  });

  return Product;
};
