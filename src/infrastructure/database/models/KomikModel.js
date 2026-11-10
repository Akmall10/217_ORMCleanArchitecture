const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const KomikModel = sequelize.define(
  'Komik',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'komik',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = KomikModel;
