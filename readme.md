<p align="center"><img src="/public/mathlogics.png" a,t="mathLogics"></p>

<h2 align="center">Pengantar</h2>

[mathLogics](https://github.com/ohchiko/math-logic) merupakan aplikasi web yang dibuat oleh kelompok 3 mata kuliah MT200D dengan tujuan menyelesaikan tugas yang diberikan.

Jika Anda pernah merasa kebingungan dalam menghitung hasil dari pernyataan majemuk dalam logika matematika, Anda akan mulai menyukai aplikasi ini.

## Fitur

- Tabel kebenaran (*truth table*)
- Menentukan hasil dari setiap logika pernyataan majemuk
- Menentukan hasil dari gabungan beberapa logika pernyataan majemuk
- *Fancy design* (warna *background* berubah tiap kunjungan)

## Kebutuhan (*Prerequisite*)

- [npm](https://github.com/npm/npm)

<h2 align="center">Cara Kerja</h2>

Berikut adalah bagaimana aplikasi ini memberikan hasil dari pernyataan yang diberikan.

### Negasi (`~`)

1. Pengguna memasukkan pernyataan dengan nilai benar/salah sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah)
2. Pengguna klik pada tombol `Result`
3. Sistem [mengubah masukan menjadi nilai `true|false`](#konversi-masukan)
4. Sistem mengembalikan hasil berupa lawan dari masukan menggunakan logika `NOT (!)`

### Konjungsi (`^`)

1. Pengguna memasukkan pernyataan pertama (`a`) dengan nilai benar/salah sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah)
2. Pengguna memasukkan pernyataan kedua (`b`) dengan nilai benar/salah sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah)
3. Pengguna klik pada tombol `Result`
4. Sistem [mengubah masukan menjadi nilai `true|false`](#konversi-masukan)
5. Sistem menggunakan logika `AND (a && b)` serta mengembalikan hasilnya

### Disjungsi (`v`)

1. Pengguna memasukkan pernyataan pertama (`a`) dengan nilai benar/salah sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah)
2. Pengguna memasukkan pernyataan kedua (`b`) dengan nilai benar/salah sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah)
3. Pengguna klik pada tombol `Result`
4. Sistem [mengubah masukan menjadi nilai `true|false`](#konversi-masukan)
5. Sistem menggunakan logika `OR (a || b)` serta mengembalikan hasilnya

### Implikasi (`=>`)

1. Pengguna memasukkan pernyataan pertama (`a`) dengan nilai benar/salah sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah)
2. Pengguna memasukkan pernyataan kedua (`b`) dengan nilai benar/salah sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah)
3. Pengguna klik pada tombol `Result`
4. Sistem [mengubah masukan menjadi nilai `true|false`](#konversi-masukan)
5. Sistem melakukan tes jika `a` benar dan `b` salah (`a && !b`), jika tes terpenuhi maka sistem mengembalikan hasil berupa `false`, jika tidak maka `true`

### Biimplikasi (`<=>`)

1. Pengguna memasukkan pernyataan pertama (`a`) dengan nilai benar/salah sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah)
2. Pengguna memasukkan pernyataan kedua (`b`) dengan nilai benar/salah sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah)
3. Pengguna klik pada tombol `Result`
4. Sistem [mengubah masukan menjadi nilai `true|false`](#konversi-masukan)
5. Sistem melakukan tes jika `a` dan `b` bernilai sama (`a == b`), jika tes terpenuhi maka sistem mengembalikan hasil berupa `true`, jika tidak maka `false`

### Manual

1. Pengguna memasukkan nilai `p` dengan nilai benar/salah sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah)
2. Pengguna memasukkan nilai `q` dengan nilai benar/salah sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah)
3. Pengguna memasukkan logika pernyataan majemuk menggunakan `p` dan/atau `q`
4. Pengguna klik pada tombol `Result`
5. Sistem [mengubah masukan menjadi nilai `true|false`](#konversi-masukan)
6. Sistem melakukan cek jika terdapat negasi (`~`) pada logika pernyataan, jika ada maka sistem melakukan proses [Negasi](#negasi)
7. Sistem melakukan penghitungan pada nilai yang berada di dalam kurung (`()`) terlebih dahulu
8. Sistem mengembalikan hasil akhir

### Tabel Kebenaran

1. Pengguna memilih tabel kebenaran dari logika pernyataan
2. Sistem mengambil data/isi tabel berdasarkan pilihan pengguna
3. Sistem menampilkan tabel kebenaran

### Konversi Masukan

1. Sistem menerima masukan yang bernilai sesuai [daftar masukan yang dapat diberikan](#nilai-benarsalah)
2. Sistem mengubahnya menjadi angka `0|1` yang sama artinya dengan `true|false` menggunakan metode [*replace*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) melalui [*regular expressions*](https://en.wikipedia.org/wiki/Regular_expression)

### Konversi Hasil

Pengguna dapat memilih jenis hasil yang akan diterima dari sistem sesuai dengan [daftar penulisan nilai benar/salah](#nilai-benarsalah) dengan cara klik pada pilihan yang terdapat di bawah kolom masukan pernyataan dan di atas kolom hasil.

<h2 align="center">Sintaks Penulisan</h2>

### Nilai Benar/Salah

Nilai yang dapat diberikan pengguna dan yang dapat diterima oleh sistem sebagai nilai benar atau salah hanyalah yang terdaftar di bawah ini.

| BENAR | SALAH |
| :-: | :-: |
| 1 | 0 |
| benar | salah |
| true | false |
| b | s |
| t | f |

| Negasi | Konjungsi | Disjungsi | Implikasi | Biimplikasi |
| :-: | :-: | :-: | :-: | :-: |
| `~` | `^` | `v` | `=>` | `<=>` |

Pada [gabungan pernyataan majemuk](#manual), yang dibaca oleh sistem adalah yang dinyatakan dalam tanda kurung (`()`) terlebih dahulu.

### Pernyataan Manual

Masukan beberapa pernyataan majemuk yang terdapat dalam halaman `Manual` yang dapat diberikan pengguna dan yang dapat diterima oleh sistem adalah sesuai dengan contoh-contoh di bawah ini.

- `p^q`
- `~p=>(~q)`
- `~(p<=>(p^~(pvq)))`
- `(p<=>(p^~(pvq)))=>~(q^(p<=>q))`

<h2 align="center">*Support*</h2>

## Lisensi

[mathLogics](https://github.com/ohchiko/math-logic) adalah aplikasi *open-sourced* yang berlisensi di bawah [MIT License](http://opensource.org/licenses/MIT)

## Changelog

Perubahan versi pada aplikasi ini dapat dilihat di [CHANGELOG](https://github.com/ohchiko/math-logic/blob/master/CHANGELOG).

## Ekstra

Jika Anda mendapati *error* atau *bug* pada aplikasi ini yang belum dibahas, jangan ragu untuk membuat *issue* baru atau lakukan *pull request* untuk mengajukan perbaikan.

Pada [gabungan beberapa pernyataan majemuk](#manual), sistem akan mengeluarkan nilai berupa `invalid` pada kolom hasil jika penulisan pernyataan tidak sesuai dengan [sintaks penulisan pernyataan manual](#pernyataan-manual).
