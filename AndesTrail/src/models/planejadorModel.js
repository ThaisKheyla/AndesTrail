const db = require('../database/config');

function inserirPlanejamento(destino, dataIda, dataVolta, orcamento) {
    return db.executar(`
        INSERT INTO planejamentos (destino, data_ida, data_volta, orcamento)
        VALUES ('${destino}', '${dataIda}', '${dataVolta}', '${orcamento}');
    `);
}

function listarPlanejamentos() {
    return db.executar('SELECT * FROM planejamentos');
}

module.exports = {
    inserirPlanejamento,
    listarPlanejamentos
};