const express = require("express");
const router = express.Router();
const culturaController = require("../controllers/culturaController");

router.post("/salvar", culturaController.salvar);

module.exports = router;
