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
  host: 'postgres://tinder_39hv_user:zdsHf6H69DK88K5L8tZ4kw3esnLkUde9@dpg-ckirbjb6fquc739mhsk0-a.oregon-postgres.render.com/tinder_39hv',
  port: '5432',
  database: 'tinder_39hv',
};

const db = pgp(dbConfig);
module.exports = db;
