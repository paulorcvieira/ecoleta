const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./src/database/sqlite3/.database.db");

// db.serialize(() => {
// db.run(`
//   CREATE TABLE IF NOT EXISTS places (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     image TEXT,
//     name TEXT,
//     address TEXT,
//     address2 TEXT,
//     state TEXT,
//     city TEXT,
//     items TEXT
//   );
// `);

//   const query = `
//   INSERT INTO places (
//     image,
//     name,
//     address,
//     address2,
//     state,
//     city,
//     items
//   ) VALUES (?,?,?,?,?,?,?);
// `;

// const values = [
//   "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//   "Colectoria",
//   "Guilherme Gemballa, Jardim América",
//   "Nº 260",
//   "Santa Catarina",
//   "Rio do Sul",
//   "Resíduos Eletrônicos, Lâmpadas"
// ];

// const values = [
//   "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//   "Papersider",
//   "Guilherme Gemballa, Jardim América",
//   "Nº 260",
//   "Santa Catarina",
//   "Rio do Sul",
//   "Papéis e Papelão"
// ];

// function afterInsertData(error) {
//   if (error) {
//     return console.log("DB :: INSERT :: ERROR: ", error);
//   }

//   console.log("DB :: INSERT: Collect Point created with success!");
//   console.log(this);
// }

// Insert Data
// db.run(query, values, afterInsertData);

// Find in DB
// db.all(`SELECT * FROM places`, function (error, rows) {
//   if (error) {
//     return console.log("DB :: SELECT ALL :: ERROR: ", error);
//   }
//   console.log("DB :: SELECT ALL: ");
//   console.log(rows);
// });

// Delete Id
// db.run(`DELETE FROM places WHERE id = ?`, [1], function (error) {
//   if (error) {
//     return console.log("DB :: DELETE :: id :: ERROR: ", error);
//   }
//   console.log("DB :: DELETE :: Delete data success!");
// });

// });

module.exports = db;
