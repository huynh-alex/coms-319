import mysql from "mysql2";
import config from "../config/db.config.js";

const connection = mysql.createConnection({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  port: config.DB_PORT
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to the database.");
});

export default connection;
