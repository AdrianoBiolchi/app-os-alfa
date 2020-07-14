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
        result.forEach(function (row) {
          console.log(row, ab2str(row)); //id and name are fields from the select *
        });

        function ab2str(buf) {
          return String.fromCharCode.apply(null, new Uint16Array(buf));
        }
        res.json(result);
        db.detach();
      });
    });
  },
};
