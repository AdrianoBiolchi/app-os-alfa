const Firebird = require("node-firebird-data");
const options = require("../config/database");

module.exports = {
  async index(req, res) {
    Firebird.attach(options, function (err, db) {
      if (err) throw err;
      db.query("SELECT * FROM C000051", function (err, result) {
        // IMPORTANT: close the connection
        db.detach();
        return res.json(result);
      });
    });
  },
};
