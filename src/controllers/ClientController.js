const Firebird = require("node-firebird-data");
const options = require("../config/database");
var iconv = require("iconv-lite");
const { StringDecoder } = require("string_decoder");

module.exports = {
  async index(req, res) {
    Firebird.attach(options, function (err, db) {
      if (err) throw err;

      // db = DATABASE
      db.query("SELECT * FROM  c000007", function (err, result) {
        // IMPORTANT: close the connection
        db.detach();
        return res.json(result);
      });
    });
  },
};
