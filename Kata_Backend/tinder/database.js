const pgp = require('pg-promise')();

const dbConfig = {
  user: 'postgres',
  password: '12345',
  host: 'localhost',
  port: '5432',
  database: 'tinder',
};

const db = pgp(dbConfig);
module.exports = db;
