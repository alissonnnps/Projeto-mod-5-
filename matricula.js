'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      Matricula.belongsTo(models.Aluno, { foreignKey: 'alunoId' });
      Matricula.belongsTo(models.Curso, { foreignKey: 'cursoId' });
    }
  }

  Matricula.init({
    dataMatricula: DataTypes.DATE,
    alunoId: DataTypes.INTEGER,
    cursoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Matricula',
  });

  return Matricula;
};
