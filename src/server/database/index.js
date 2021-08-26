const { Pool } = require('pg');
const config = require('../config');
const pool = new Pool({
  user: config.userName,
  host: config.host,
  database: config.databaseName,
  password: config.password,
  port: config.port,
});

module.exports = {
  pool
};