const KomikRepository = require('../../domain/repositories/KomikRepository');
const KomikModel = require('../database/models/KomikModel');

class KomikRepositorySequelize extends KomikRepository {
  async findAll() {
    return KomikModel.findAll({ order: [['id', 'ASC']] });
  }

  async findById(id) {
    return KomikModel.findByPk(id);
  }

  async create(data) {
    return KomikModel.create(data);
  }

  async update(id, data) {
    const komik = await KomikModel.findByPk(id);
    if (!komik) return null;
    return komik.update(data);
  }

  async delete(id) {
    const komik = await KomikModel.findByPk(id);
    if (!komik) return null;
    await komik.destroy();
    return komik;
  }
}

module.exports = KomikRepositorySequelize;
