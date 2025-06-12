var database = require("../database/config");
function autenticar(email, senha) {
    console.log("Acessando usuarioModel.autenticar:", email, senha);

    var instrucaoSql = `
    select id, nome, email
    from usuario
    where email = '${email}' AND senha = '${senha}';
`;

    console.log("Executando instrução SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    console.log("Acessando usuarioModel.cadastrar:", nome, email, senha);

    
var instrucaoSql = `
    INSERT INTO usuario (nome, email, senha)
    VALUES ('${nome}', '${email}', '${senha}');
`;
    
    console.log("Executando instrução SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};
