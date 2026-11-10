# 217_ORMCleanArchitecture

Praktikum 6 - CRUD **Komik** dengan Express JS, PostgreSQL, dan Sequelize menggunakan **Clean Architecture**.

## Struktur Folder

```
src/
├── domain/            # Entity & kontrak repository (aturan bisnis)
├── application/       # Use case (CreateKomik, GetKomik, UpdateKomik, DeleteKomik)
├── infrastructure/    # Sequelize, model, koneksi DB, implementasi repository
├── interfaces/        # Controller & routes (HTTP layer)
├── app.js
└── server.js
```

## Tabel `komik`

| Kolom       | Tipe                  |
|-------------|-----------------------|
| id          | INTEGER, PK, auto inc |
| title       | VARCHAR, not null     |
| description | TEXT                  |
| author      | VARCHAR, not null     |

## Cara Menjalankan

```bash
git clone https://github.com/Akmall10/217_ORMCleanArchitecture.git
cd 217_ORMCleanArchitecture
npm install
cp .env.example .env     # lalu isi password PostgreSQL
npm start
```

Database dan tabel `komik` dibuat otomatis oleh Sequelize saat server dijalankan.

## Endpoint

| Method | URL           | Keterangan          |
|--------|---------------|---------------------|
| GET    | /komik        | Ambil semua komik   |
| GET    | /komik/:id    | Ambil satu komik    |
| POST   | /komik        | Tambah komik        |
| PUT    | /komik/:id    | Ubah komik          |
| DELETE | /komik/:id    | Hapus komik         |

Contoh body (POST / PUT):

```json
{
  "title": "One Piece",
  "description": "Petualangan Luffy mencari harta karun",
  "author": "Eiichiro Oda"
}
```

## Hasil Pengujian Postman

### GET
![GET](screenshots/get.png)

### POST
![POST](screenshots/post.png)

### PUT
![PUT](screenshots/put.png)

### DELETE
![DELETE](screenshots/delete.png)
