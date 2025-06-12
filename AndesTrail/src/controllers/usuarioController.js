const usuarioModel = require('../models/usuarioModel');

async function login(req, res) {
    const { email, senha } = req.body;
    try {
        // Para login
        const resultado = await usuarioModel.autenticar(email, senha);
        if (resultado && resultado.length > 0) {
            res.json({ usuario: resultado[0] });
        } else {
            res.json({ usuario: null });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function cadastrar(req, res) {
    const { nome, email, senha } = req.body;
    try {
        const resultado = await usuarioModel.cadastrar(nome, email, senha);
        res.status(201).json({ success: true, usuario: resultado });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { login, cadastrar };