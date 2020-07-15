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
        function getValues() {
          var element = false;
          for (let index = 0; index < result.length; index++) {
            //const str = iconv.decode(result[key].NOME, "win1252");
            element = result[index].NOME.toString();
            return element;
          }
        }

        // return res.json(c);

        res.json(getValues());
        db.detach();
      });
    });

    // Destroy pool
    pool.destroy();
  },
};
