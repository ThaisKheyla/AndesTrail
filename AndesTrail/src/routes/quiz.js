const express = require("express");
const router = express.Router();
const database = require("../database/config");
const quizController = require("../controllers/quizController");


router.post("/resultados", async (req, res) => {
    const { usuario, acertos, erros } = req.body;

    try {
        const instrucao = `
            INSERT INTO resultados_quiz (usuario, acertos, erros)
            VALUES ('${usuario}', ${acertos}, ${erros});
        `;
        await database.executar(instrucao);
        res.status(200).send("Resultados salvos com sucesso!");
    } catch (err) {
        console.error("Erro ao salvar resultados:", err);
        res.status(500).send("Erro ao salvar resultados.");
    }
});

router.get("/kpis", quizController.obterKPIs);

module.exports = router;