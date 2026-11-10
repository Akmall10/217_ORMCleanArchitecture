class GetAllKomik {
  constructor(komikRepository) {
    this.komikRepository = komikRepository;
  }

  async execute() {
    return this.komikRepository.findAll();
  }
}

class GetKomikById {
  constructor(komikRepository) {
    this.komikRepository = komikRepository;
  }

  async execute(id) {
    const komik = await this.komikRepository.findById(id);
    if (!komik) {
      const err = new Error('Komik tidak ditemukan');
      err.status = 404;
      throw err;
    }
    return komik;
  }
}

module.exports = { GetAllKomik, GetKomikById };
