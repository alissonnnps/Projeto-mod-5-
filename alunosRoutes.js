const express = require('express');
const router = express.Router();

const alunosController = require('../controllers/alunosController');

router.get('/', alunosController.listar);
router.get('/:id', alunosController.buscarPorId);
router.post('/', alunosController.criar);
router.put('/:id', alunosController.atualizar);
router.delete('/:id', alunosController.excluir);

module.exports = router;

