const { Pool } = require('pg');
require('dotenv').config();

console.log('DB_PASSWORD avant connexion:', process.env.DB_PASSWORD);

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false // 🔑 obligatoire pour Render
  }
});

module.exports = pool;
