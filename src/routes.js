const express = require("express");
const routes = express.Router();

/**
 * Controllers
 */
const ClientController = require("./controllers/ClientController");
const ProductController = require("./controllers/ProductController");

routes.get("/", (req, res) => {
  return res.send("The server is only.");
});

/**
 * Routes for client
 */
routes.get("/clients", ClientController.index);

/**
 * Routes for products
 */
routes.get("/products", ProductController.index);
routes.put("/products/:id", ProductController.update);

module.exports = routes;
