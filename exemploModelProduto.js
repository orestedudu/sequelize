const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Produto', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING },
    preco: { type: DataTypes.DECIMAL(10, 2) },
  });
};
