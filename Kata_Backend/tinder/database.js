const pgp = require('pg-promise')();

const dbConfig = {
  user: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  port: '5432',
  database: 'backendbd',
};

const db = pgp(dbConfig);

module.exports = db;
