const { Pool } = require('pg');
const pool = new Pool({
  user: 'fpuser1',
  host: 'localhost',
  database: 'finalproj',
  password: '12345',
  port: 5432,
});

module.exports = pool;
