class KomikController {
  constructor({ getAllKomik, getKomikById, createKomik, updateKomik, deleteKomik }) {
    this.getAllKomik = getAllKomik;
    this.getKomikById = getKomikById;
    this.createKomik = createKomik;
    this.updateKomik = updateKomik;
    this.deleteKomik = deleteKomik;
  }

  getAll = async (req, res, next) => {
    try {
      const data = await this.getAllKomik.execute();
      res.status(200).json({ message: 'Berhasil mengambil data komik', data });
    } catch (e) { next(e); }
  };

  getById = async (req, res, next) => {
    try {
      const data = await this.getKomikById.execute(req.params.id);
      res.status(200).json({ message: 'Berhasil mengambil data komik', data });
    } catch (e) { next(e); }
  };

  create = async (req, res, next) => {
    try {
      const data = await this.createKomik.execute(req.body);
      res.status(201).json({ message: 'Komik berhasil ditambahkan', data });
    } catch (e) { next(e); }
  };

  update = async (req, res, next) => {
    try {
      const data = await this.updateKomik.execute(req.params.id, req.body);
      res.status(200).json({ message: 'Komik berhasil diperbarui', data });
    } catch (e) { next(e); }
  };

  delete = async (req, res, next) => {
    try {
      const data = await this.deleteKomik.execute(req.params.id);
      res.status(200).json({ message: 'Komik berhasil dihapus', data });
    } catch (e) { next(e); }
  };
}

module.exports = KomikController;
