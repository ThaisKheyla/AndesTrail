const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/kpis", dashboardController.kpis);

module.exports = router;
