'use strict';
const { Model } = require('sequelize');
const UserSchema = require('./schema/user')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.Orders = this.hasMany(models.Order)
      User.AuthenticityTokens = this.hasMany(models.AuthenticityToken)
      User.Carts = this.hasMany(models.Cart)
      User.Products = this.belongsToMany(models.Product, { through: 'Cart'})
      User.Points = this.hasMany(models.Point)
      User.Wishlists = this.hasMany(models.Wishlist)
      User.Products = this.belongsToMany(models.Product, { through: 'Wishlist'})
    }
  };

  const { tableAttributes } = UserSchema (sequelize, DataTypes)
  User.init( tableAttributes, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
