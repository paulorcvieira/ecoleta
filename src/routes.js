var express = require("express");
var router = express.Router();

//Controller
var EcoletaController = require("./app/controllers/EcoletaController");

// Routes
router.get("/", EcoletaController.index);

router.get("/create-point", EcoletaController.createPoint);

router.post("/create-point", EcoletaController.savePoint);

router.get("/search", EcoletaController.search);

module.exports = router;
