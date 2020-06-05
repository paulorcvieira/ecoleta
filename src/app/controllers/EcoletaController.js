const EcoletaService = require("../services/EcoletaServices");

class EcoletaController {
  index(req, res) {
    return res.render("index.njk");
  };

  createPoint(req, res) {
    return res.render("create-point.njk");
  };

  searchResults(req, res) {
    return res.render("search-results.njk");
  };
}

module.exports = new EcoletaController();
