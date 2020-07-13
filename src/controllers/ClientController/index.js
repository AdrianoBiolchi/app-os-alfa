const Firebird = require("node-firebird");
const options = require("../../config/database");
module.exports = {
  async index(req, res) {
    try {
      Firebird.attach(options, function (err, db) {
        console.log(options);
        try {
          db.query("SELECT * FROM c000025", function (err, result) {
            try {
              if (err) {
                return res.status(400).send({
                  error:
                    "Ocorreu um erro ao tentar fazer a consulta de Clientes. Erro : " +
                    err,
                });
              }

              if (result != undefined) {
                return res.send(JSON.stringify(result));
              } else {
                res
                  .status(400)
                  .send({ error: "Não existem dados para ser retornados" });
              }
            } catch {
              res.status(400).send({ error: "Falha ao buscar dados no banco" });
            }
          });
          db.detach();
        } catch {
          console.log("Ocorreu um erro ao gerar o pool conexões");
        }
      });
    } catch {
      res
        .status(400)
        .send({ error: "Falha ao carregar os dados de clientes do servidor" });
    }
  },
};
