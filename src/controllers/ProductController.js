const Firebird = require("node-firebird");
const options = require("../config/database");

module.exports = {
  async index(req, res) {
    // 5 = the number is count of opened sockets
    var pool = Firebird.pool(5, options);

    // Get a free pool
    pool.get(function (err, db) {
      if (err) throw err;

      // db = DATABASE
      db.query("SELECT * FROM c000025", function (err, result) {
        // IMPORTANT: release the pool connection
        db.detach();
      });
    });

    // Destroy pool
    pool.destroy();
    // Firebird.attach(options, function (err, db) {
    //   if (err) throw err;

    //   // db = DATABASE
    //   db.query("SELECT * FROM c000025", function (err, result) {
    //     // IMPORTANT: close the connection
    //     db.detach();
    //     return res.json(result);
    //   });
    // });
  },

  async update(req, res) {
    const { id } = req.params;
    const { estoque } = req.body;
    Firebird.attach(options, function (err, db) {
      if (err) throw err;
      // db = DATABASE
      db.query(
        `UPDATE c000025 SET ESTOQUE = ${estoque} WHERE CODIGO = ${id}`,
        function (err, result) {
          // IMPORTANT: close the connection

          return res.json({ message: "Produto atualizado com sucesso!" });
          db.detach();
        }
      );
    });
  },
};
