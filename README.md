# Notes App

Notes App adalah aplikasi pencatatan sederhana yang memungkinkan pengguna untuk membuat, melihat, dan mengelola catatan. Aplikasi ini dibuat sebagai bagian dari project submission untuk kursus front-end web development.

## Fitur

- **Menampilkan Daftar Catatan**: Menampilkan daftar catatan dari data dummy.
- **Formulir Tambah Catatan**: Formulir untuk menambahkan catatan baru dengan validasi real-time.
- **CSS Grid Layout**: Menggunakan CSS Grid untuk layout yang responsif.
- **Bootstrap**: Menggunakan Bootstrap untuk tampilan yang lebih baik dan user-friendly.
- **Web Components**: Menggunakan custom elements untuk komponen UI.
- **Custom Attributes**: Menerapkan custom attributes pada custom elements.
- **Ikon di Header**: Header dengan ikon dan judul yang menarik.

## Teknologi

- HTML
- CSS
- JavaScript
- Web Components
- CSS Grid
- Bootstrap
- FontAwesome

## Cara Menggunakan

1. **Clone Repository**

    ```bash
    git clone https://github.com/username/notes-app.git
    cd notes-app
    ```

2. **Buka `index.html` di Browser**

    Anda dapat membuka file `index.html` secara langsung di browser untuk melihat aplikasi.

## Struktur Folder dan File

```plaintext
notes-app/
│
├── index.html
├── styles/
│   ├── main.css
│   ├── components/
│   │   ├── app-bar.css
│   │   ├── note-item.css
│   │   └── note-form.css
│
├── scripts/
│   ├── main.js
│   ├── data/
│   │   └── notes-data.js
│   ├── components/
│   │   ├── app-bar.js
│   │   ├── note-item.js
│   │   └── note-form.js
│
└── assets/
    ├── images/
    └── fonts/
```

## Catatan

- **Validasi Real-Time**: Formulir menggunakan validasi real-time untuk memastikan data yang dimasukkan valid.
- **Custom Attributes**: Atribut `archived` pada elemen `note-item` digunakan untuk menandai catatan yang diarsipkan.
- **Responsive Design**: Aplikasi dirancang responsif menggunakan CSS Grid dan Bootstrap.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini dan ajukan pull request dengan perubahan Anda.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
