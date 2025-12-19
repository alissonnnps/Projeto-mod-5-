const { Curso } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const cursos = await Curso.findAll();
      res.json(cursos);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao listar cursos' });
    }
  },

  async buscarPorId(req, res) {
    try {
      const curso = await Curso.findByPk(req.params.id);
      if (!curso) {
        return res.status(404).json({ erro: 'Curso não encontrado' });
      }
      res.json(curso);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao buscar curso' });
    }
  },

  async criar(req, res) {
    try {
      const curso = await Curso.create(req.body);
      res.status(201).json(curso);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  },

  async atualizar(req, res) {
    try {
      const curso = await Curso.findByPk(req.params.id);
      if (!curso) {
        return res.status(404).json({ erro: 'Curso não encontrado' });
      }

      await curso.update(req.body);
      res.json(curso);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao atualizar curso' });
    }
  },

  async excluir(req, res) {
    try {
      const curso = await Curso.findByPk(req.params.id);
      if (!curso) {
        return res.status(404).json({ erro: 'Curso não encontrado' });
      }

      await curso.destroy();
      res.json({ mensagem: 'Curso removido com sucesso' });
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao excluir curso' });
    }
  }
};
