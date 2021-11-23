'use strict';
const { Model } = require('sequelize');
const { AuthenticityTokenSchema } = require('./schema/authenticity_token')

module.exports = (sequelize, DataTypes) => {
  class AuthenticityToken extends Model {
    static associate(models) {
      // define association here
    }
  };
  const { tableAttributes } = AuthenticityTokenSchema(sequelize,DataTypes)
  AuthenticityToken.init(tableAttributes, {
    sequelize,
    modelName: 'AuthenticityToken',
  });

  return AuthenticityToken;
};
