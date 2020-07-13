const Firebird = require("node-firebird");
const options = require("../../config/database");
module.exports = {
  async index(req, res) {
    Firebird.attach(options, function (err, db) {
      if (err) throw err;

      // db = DATABASE
      // INSERT BUFFER as BLOB
      db.query("SELECT NOME FROM c000007", function (err, result) {
        // IMPORTANT: close the connection
        res.json(Array(result));
        db.detach();
      });
    });
  },
};
