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
      db.query("SELECT * FROM c000007", function (err, result, fields) {
        if (err) throw err;

        // IMPORTANT: release the pool connection
        // const c = result.decode(result, "win1250");
        // function getValues() {
        //   var element = false;

        // return res.json(c);
        console.log(fields.length);
        // function getData() {
        //   var data = [];
        //   var clients = [];
        //   for (let index = 0; index < result.length; index++) {
        //     const nameField = fields[index].field;
        //     const dd = result[index] ? String(result[index][nameField]) : null;
        //     data.push({ value: dd });

        //     for (let i = 0; i < fields.length; i++) {
        //       data.push({ field: nameField });
        //     }
        //     clients.push(data);
        //   }

        //   return clients;
        // }

        res.send(String(result));
        db.detach();
      });
    });

    // Destroy pool
    pool.destroy();
  },
};
