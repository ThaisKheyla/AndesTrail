const PlanejadorModel = require('../models/planejadorModel');

async function criarPlanejamento(req, res) {
    const { destino, dataIda, dataVolta, orcamento } = req.body;
    try {
        await PlanejadorModel.inserirPlanejamento(destino, dataIda, dataVolta, orcamento);
        res.status(201).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function listarPlanejamentos(req, res) {
    try {
        const planejamentos = await PlanejadorModel.listarPlanejamentos();
        res.json(planejamentos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { listarPlanejamentos, criarPlanejamento };