const pgp = require('pg-promise')();

/* const dbConfig = {
  user: 'postgres',
  password: '12345',
  host: 'localhost',
  port: '5432',
  database: 'tinder',
};
 */

const dbConfig = {
  user: 'tinder_39hv_user',
  password: 'zdsHf6H69DK88K5L8tZ4kw3esnLkUde9',
  host: 'dpg-ckirbjb6fquc739mhsk0-a',
  port: '5432',
  database: 'tinder_39hv',
};

const db = pgp(dbConfig);
module.exports = db;
