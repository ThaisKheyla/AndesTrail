const database = require("../database/config");

async function cadastrar(nome, descricao, imagem_url) {
    var instrucao = `
        INSERT INTO pais (nome, descricao, imagem_url)
        VALUES ('${nome}', '${descricao}', '${imagem_url}');
    `;
    const [resultado] = await database.executar(instrucao);
    return resultado;
}

async function listar() {
    var instrucao = `
        SELECT * FROM pais;
    `;
    
    const paises = await database.executar(instrucao);
    return paises;
}

module.exports = { cadastrar, listar };
