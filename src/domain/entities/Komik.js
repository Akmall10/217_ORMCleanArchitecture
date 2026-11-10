class Komik {
  constructor({ id = null, title, description = '', author }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
  }

  // Aturan bisnis: title dan author wajib diisi
  static validate({ title, author }) {
    const errors = [];
    if (!title || !String(title).trim()) errors.push('title wajib diisi');
    if (!author || !String(author).trim()) errors.push('author wajib diisi');
    return errors;
  }
}

module.exports = Komik;
