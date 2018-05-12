const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/represented_app";
const db = pgp(connectionString);


module.exports = db;