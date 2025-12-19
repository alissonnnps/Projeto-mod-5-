const express = require('express');
const controller = require('../controllers/matriculasController');
const router = express.Router();

router.post('/', controller.criar);

module.exports = router;
