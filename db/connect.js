const { Pool } = require("pg");

require("dotenv").config();

const pool = new Pool({
  user: process.env.USER,
  localhost: process.env.LOCALHOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

module.exports = pool;
