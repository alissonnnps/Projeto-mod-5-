'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      Curso.belongsToMany(models.Aluno, {
        through: models.Matricula,
        foreignKey: 'cursoId'
      });
    }
  }

  Curso.init({
    nome: DataTypes.STRING,
    cargaHoraria: DataTypes.INTEGER,
    modalidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'Cursos'
  });

  return Curso;
};
