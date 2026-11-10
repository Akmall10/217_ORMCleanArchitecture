const express = require('express');

const KomikRepositorySequelize = require('./infrastructure/repositories/KomikRepositorySequelize');
const CreateKomik = require('./application/usecases/CreateKomik');
const { GetAllKomik, GetKomikById } = require('./application/usecases/GetKomik');
const UpdateKomik = require('./application/usecases/UpdateKomik');
const DeleteKomik = require('./application/usecases/DeleteKomik');
const KomikController = require('./interfaces/controllers/KomikController');
const komikRoutes = require('./interfaces/routes/komikRoutes');

// Composition root: menyambungkan semua layer
const komikRepository = new KomikRepositorySequelize();
const controller = new KomikController({
  getAllKomik: new GetAllKomik(komikRepository),
  getKomikById: new GetKomikById(komikRepository),
  createKomik: new CreateKomik(komikRepository),
  updateKomik: new UpdateKomik(komikRepository),
  deleteKomik: new DeleteKomik(komikRepository),
});

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'API Komik - ORM Clean Architecture' }));
app.use('/komik', komikRoutes(controller));

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

module.exports = app;
