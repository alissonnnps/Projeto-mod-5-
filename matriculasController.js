const { Matricula } = require('../models');

module.exports = {
  async criar(req, res) {
    const matricula = await Matricula.create(req.body);
    res.json(matricula);
  }
};
