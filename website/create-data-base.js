const mySql = require("mysql2");

const config = {
  host: "localhost",
  user: "root",
  password: null,
};
//Abrir la connection con el servidor
const connection = mySql.createConnection(config);

//corremos la creación de la base de datos

connection.query(
  `CREATE DATABASE IF NOT EXISTS vission`,
  function (err, result) {
    console.log(err);
    console.log(result);
  }
);

//cerrar connection
