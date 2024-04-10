const mysql = require("mysql");
const { promisify } = require("util");
const { database } = require("./keys");
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Se perdió la conexión con la BD");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("La BD tiene demasiadas conexiones concurrentes");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("La conexión a la BD fue rechazada");
    }
  }
  if (connection) connection.release();
  console.log("Base de datos conectada");
  return;
});

pool.query = promisify(pool.query);

module.exports = pool;
