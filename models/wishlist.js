'use strict';
const { Model } = require('sequelize');
const WishlistSchema = require('./schema/wishlist')

module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate(models) {
      Wishlist.User = this.belongsTo(models.User)
      Wishlist.Product = this.belongsTo(models.Product)
    }
  };

  const { tableAttributes } = WishlistSchema (sequelize, DataTypes)
  Wishlist.init(tableAttributes, {
    sequelize,
    modelName: 'Wishlist',
  });

  return Wishlist;
};
