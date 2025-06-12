var express = require("express");
var router = express.Router();
var paisController = require("../controllers/paisController");

router.post("/cadastrar", paisController.cadastrar);
router.get("/listar", paisController.listar);

module.exports = router;
