require('dotenv').config();
const { Client } = require('pg');

// Membuat database baru otomatis jika belum ada
async function createDatabaseIfNotExists() {
  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'postgres',
  });

  await client.connect();
  const result = await client.query(
    'SELECT 1 FROM pg_database WHERE datname = $1',
    [process.env.DB_NAME]
  );

  if (result.rowCount === 0) {
    await client.query(`CREATE DATABASE "${process.env.DB_NAME}"`);
    console.log(`Database "${process.env.DB_NAME}" berhasil dibuat`);
  }
  await client.end();
}

module.exports = createDatabaseIfNotExists;
