var express = require("express");
var router = express.Router();

//Controller
var EcoletaController = require("./app/controllers/EcoletaController");

// Routes
router.get("/", EcoletaController.index);

router.get("/create-point", EcoletaController.createPoint);

router.get("/search-results", EcoletaController.searchResults);

module.exports = router;
