const Komik = require('../../domain/entities/Komik');

class CreateKomik {
  constructor(komikRepository) {
    this.komikRepository = komikRepository;
  }

  async execute(input) {
    const errors = Komik.validate(input);
    if (errors.length) {
      const err = new Error(errors.join(', '));
      err.status = 400;
      throw err;
    }
    const komik = new Komik(input);
    return this.komikRepository.create({
      title: komik.title,
      description: komik.description,
      author: komik.author,
    });
  }
}

module.exports = CreateKomik;
