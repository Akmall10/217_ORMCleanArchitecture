const Komik = require('../../domain/entities/Komik');

class UpdateKomik {
  constructor(komikRepository) {
    this.komikRepository = komikRepository;
  }

  async execute(id, input) {
    const errors = Komik.validate(input);
    if (errors.length) {
      const err = new Error(errors.join(', '));
      err.status = 400;
      throw err;
    }
    const updated = await this.komikRepository.update(id, {
      title: input.title,
      description: input.description,
      author: input.author,
    });
    if (!updated) {
      const err = new Error('Komik tidak ditemukan');
      err.status = 404;
      throw err;
    }
    return updated;
  }
}

module.exports = UpdateKomik;
