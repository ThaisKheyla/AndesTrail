const database = require("../database/config");

async function obterKPIs(req, res) {
    try {
        const totalJogos = await database.executar("SELECT COUNT(*) AS total FROM resultados_quiz");
        const totalAcertos = await database.executar("SELECT SUM(acertos) AS total FROM resultados_quiz");

        // Consulta_________________________________
        const totalErros = await database.executar("SELECT SUM(erros) AS total FROM resultados_quiz");

        const usuarioTop = await database.executar(`
            SELECT usuario, SUM(acertos) AS total_acertos 
            FROM resultados_quiz 
            GROUP BY usuario 
            ORDER BY total_acertos DESC 
            LIMIT 1
        `);

        res.json({
            totalJogos: totalJogos[0]?.total || 0,
            totalAcertos: totalAcertos[0]?.total || 0,
            totalErros: totalErros[0]?.total || 0,
            usuarioTop: usuarioTop[0]?.usuario || "N/A",
        });
    } catch (error) {
        console.error("Erro ao obter KPIs:", error);
        res.status(500).json({ error: "Erro ao obter KPIs" });
    }
}

module.exports = { obterKPIs };