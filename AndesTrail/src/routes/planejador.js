const express = require('express');
const router = express.Router();
const planejadorController = require('../controllers/planejadorController');

router.get('/', planejadorController.listarPlanejamentos); //rotinha
router.post('/', planejadorController.criarPlanejamento);

module.exports = router;