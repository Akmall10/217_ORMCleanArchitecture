require('dotenv').config();
const app = require('./app');
const sequelize = require('./infrastructure/database/sequelize');
const createDatabaseIfNotExists = require('./infrastructure/database/createDatabase');
require('./infrastructure/database/models/KomikModel');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await createDatabaseIfNotExists();
    await sequelize.authenticate();
    await sequelize.sync(); // membuat tabel "komik" melalui Sequelize
    console.log('Koneksi database berhasil, tabel komik siap');
    app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
  } catch (err) {
    console.error('Gagal menjalankan server:', err.message);
    process.exit(1);
  }
})();
