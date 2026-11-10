class DeleteKomik {
  constructor(komikRepository) {
    this.komikRepository = komikRepository;
  }

  async execute(id) {
    const deleted = await this.komikRepository.delete(id);
    if (!deleted) {
      const err = new Error('Komik tidak ditemukan');
      err.status = 404;
      throw err;
    }
    return deleted;
  }
}

module.exports = DeleteKomik;
