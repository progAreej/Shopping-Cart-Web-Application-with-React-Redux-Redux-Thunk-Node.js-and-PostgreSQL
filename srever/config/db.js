const { Pool } = require('pg');

// PostgreSQL connection using Pool for connection pooling
const pool = new Pool({
  user: process.env.DB_USER || "postgres", // Set default username
  host: process.env.DB_HOST || "localhost", // Default host
  database: process.env.DB_NAME || "Redux", // Default database name
  password: process.env.DB_PASSWORD || "12345", // Make sure password is a string
  port: process.env.DB_PORT || 5432, // PostgreSQL default port is 5432
});

pool.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack); // Log error with details
  } else {
    console.log('Connected to PostgreSQL');
  }
});

module.exports = pool;
