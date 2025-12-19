const { Aluno } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const alunos = await Aluno.findAll();
      res.json(alunos);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao listar alunos' });
    }
  },

  async buscarPorId(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
      }
      res.json(aluno);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao buscar aluno' });
    }
  },

  async criar(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      res.status(201).json(aluno);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  },

  async atualizar(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
      }

      await aluno.update(req.body);
      res.json(aluno);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao atualizar aluno' });
    }
  },

  async excluir(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
      }

      await aluno.destroy();
      res.json({ mensagem: 'Aluno removido com sucesso' });
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao excluir aluno' });
    }
  }
};
