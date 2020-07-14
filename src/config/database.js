const path = require("path");
const database_os = path.resolve("./src/database/database.fdb");

var options = {};

options.host = "127.0.0.1";
options.port = 3050;
options.database = database_os;
options.user = "SYSDBA";
options.password = "masterkey";
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null; // default
options.pageSize = 8192; // default when creating database

module.exports = options;
