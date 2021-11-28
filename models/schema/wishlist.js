const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Wishlist', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Wishlists',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Wishlists_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
