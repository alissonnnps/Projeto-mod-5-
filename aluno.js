'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    static associate(models) {
      Aluno.belongsToMany(models.Curso, {
        through: models.Matricula,
        foreignKey: 'alunoId'
      });
    }
  }

  Aluno.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aluno',
    tableName: 'Alunos'
  });

  return Aluno;
};
