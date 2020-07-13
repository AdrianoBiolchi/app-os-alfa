const express = require("express");
const routes = require("./routes");
const app = express();
const morgan = require("morgan");
const path = require("path");
//app use
app.use(morgan("dev"));
app.use(routes);
var Port = process.env.PORT || 3333;

app.listen(Port, () => {
  console.log("🚀 Back-end started", +Port);
});
