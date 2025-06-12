const database = require("../database/config");

async function kpis(req, res) {
    try {
        const paisesResult = await database.executar("SELECT COUNT(*) as total FROM pais");
        const comentariosResult = await database.executar("SELECT COUNT(*) as total FROM comentario");
        const maisComentadoResult = await database.executar(`
            select pais, count(*) as total 
            from comentario 
            group by pais 
            order by total desc 
            limit 1
        `);
        const usuariosResult = await database.executar("SELECT COUNT(DISTINCT id_Usuario) as total FROM comentario");

        console.log("paisesResult:", paisesResult);
        console.log("comentariosResult:", comentariosResult);
        console.log("maisComentadoResult:", maisComentadoResult);
        console.log("usuariosResult:", usuariosResult);
        
        const paises = paisesResult[0] || {};
        const comentarios = comentariosResult[0] || {};
        const maisComentado = maisComentadoResult[0] || {};
        const usuarios = usuariosResult[0] || {};
        
        res.json({
            totalPaises: paises.total || 0,
            totalComentarios: comentarios.total || 0,
            paisMaisComentado: maisComentado.pais || "--",
            usuariosEngajados: usuarios.total || 0
        });
    } catch (error) {
        console.error("Erro ao buscar KPIs:", error);
        res.status(500).json({ error: "Erro ao buscar KPIs" });
    }
}

module.exports = { kpis };