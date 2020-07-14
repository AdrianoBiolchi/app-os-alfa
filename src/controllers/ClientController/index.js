const Firebird = require("node-firebird");
const options = require("../../config/database");
var iconv = require("iconv-lite");
const { StringDecoder } = require("string_decoder");
module.exports = {
  async index(req, res) {
    var pool = Firebird.pool(5, options);

    // Get a free pool
    pool.get(function (err, db) {
      if (err) throw err;
      // db = DATABASE
      db.query("SELECT * FROM c000007", function (err, result) {
        if (err) throw err;
        // IMPORTANT: release the pool connection
        // const c = result.decode(result, "win1250");
        console.log(result);
        // return res.json(c);

        res.json(result);
        db.detach();
      });
    });

    // Destroy pool
    pool.destroy();
  },
};
