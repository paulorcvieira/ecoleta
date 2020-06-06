const db = require("../../database/db");

class EcoletaController {
  index(req, res) {
    return res.render("index.njk");
  };

  createPoint(req, res) {
    return res.render("create-point.njk");
  };

  savePoint(req, res) {
    const query = `
      INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
      ) VALUES (?,?,?,?,?,?,?);
    `;

    const values = [
      req.body.image,
      req.body.name,
      req.body.address,
      req.body.address2,
      req.body.state,
      req.body.city,
      req.body.items
    ];

    function afterInsertData(error) {
      if (error) {
        return console.log("DB :: INSERT :: ERROR: ", error);
      }

      console.log("DB :: INSERT: Collect Point created with success!");
      console.log(this);

      return res.render("create-point.njk", { saved: true });
    }

    // Insert Data
    db.run(query, values, afterInsertData);


  }

  search(req, res) {

    const search = req.query.search;

    if (search == "") {
      return res.render("search-results.njk", { places });
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (error, places) {
      if (error) {
        return console.log("DB :: SELECT ALL :: ERROR: ", error);
      }

      return res.render("search-results.njk", { places });
    });

  };
}

module.exports = new EcoletaController();
