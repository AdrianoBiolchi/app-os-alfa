const express = require("express");
const routes = express.Router();

/**
 * Controllers
 */
const ClientController = require("./controllers/ClientController");
const ProductController = require("./controllers/ProductController");
const OSController = require("./controllers/OSController");
const OSItemsController = require("./controllers/OSItemsController");

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
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);

/**
 * Routes for OS with Items
 */
routes.get("/ordersItems", OSItemsController.index);
routes.put("/ordersItems/:id", OSItemsController.update);

/**
 * Routes for OS
 */
routes.get("/orders", OSItemsController.index);
routes.put("/orders/:id", OSItemsController.update);

module.exports = routes;
