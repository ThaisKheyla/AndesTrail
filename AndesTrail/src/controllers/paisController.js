var paisModel = require("../models/paisModel");

function cadastrar(req, res) {
    var { nome, descricao, imagem_url } = req.body;

    if (!nome || !descricao || !imagem_url) {
        return res.status(400).send("Campos obrigatórios não preenchidos.");
    }

    paisModel.cadastrar(nome, descricao, imagem_url)
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err.sqlMessage);
        });
}

function listar(req, res) {
    paisModel.listar()
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err.sqlMessage);
        });
}

module.exports = { cadastrar, listar };
