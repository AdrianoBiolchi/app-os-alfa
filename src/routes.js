const express = require("express");
const routes = express.Router();

/**
 * Controllers
 */
const ClientController = require("./controllers/ClientController");

routes.get("/", (req, res) => {
  return res.send("The server is only.");
});

/**
 * Routes for client
 */
routes.get("/clients", ClientController.index);

module.exports = routes;
