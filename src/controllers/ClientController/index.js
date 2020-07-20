const Firebird = require("node-firebird");
const options = require("../../config/database");
var iconv = require("iconv-lite");
const { StringDecoder } = require("string_decoder");
const windows1252 = require("windows-1252");
module.exports = {
  async index(req, res) {
    Firebird.attach(options, function (err, db) {
      if (err) throw err;

      // db = DATABASE
      db.query("SELECT * FROM c000025", function (err, result) {
        // IMPORTANT: close the connection
        return res.json(result);
        db.detach();
      });
    });
  },
};
