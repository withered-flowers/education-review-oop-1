## Table of Content
1. [Opening](#opening)
1. [Release -1](#release--1)
1. [Release 0 - Let's Make the Class](#release-0---lets-make-the-class)
1. [Release 1 - Getting Us Rich](#release-1---getting-us-rich)
1. [Release 2 - Let's Make the Machine](#release-2---lets-make-the-machine)
1. [Closing](#closing)

### Opening
Mari kita review tentang OOP di hari ini yah, tentunya kalau review tidak seru
bila kita tidak sambil mengerjakan soal bukan ?

Jadi mari kita review OOP dengan cara membuat soal di bawah ini yah !

PS:
Jika ada kesamaan nama, tempat kejadian ataupun cerita, maka itu semua 
hanya kebetulan semata dan memang ada unsur kesengajaan dari penulis yah !

### Release -1
Diceritakan bahwa kalian ada seorang developer di sebuah perusahaan game yang 
bernama `Gachacorp`. 

Tugas kalian adalah diminta untuk membuat sebuah sub-program dari game tersebut
yang digunakan untuk melakukan `Gacha` atau bahasa umumnya adalah `Randomizer`
yang akan memberikan reward / hadiah berupa `Karakter` dari game tersebut.

Telah diberikan juga data dengan nama `gacha.csv` yang akan digunakan sebagai
list dari karakter yang digunakan dalam `Gacha` tersebut.

### Release 0 - Let's Make the Class
- Class Definition -

Berdasarkan data yang ada pada file `gacha.csv` ini, developer diminta untuk 
membuat sebuah class dengan nama `Character` yang berfungsi untuk membentuk
suatu cetak biru dari data per baris yang ada pada file.

Kira kira berdasarkan file `gacha.csv`, property apa sajakah yang diperlukan
dalam class `Character` ini?

### Release 1 - Getting us Rich
- Inheritance -

Selanjutnya ternyata sang developer diminta untuk membuat class tambahan lainnya
yang bernama `SwordUser`, `SpearUser`, `BowUser`, dan `BookUser`, class ini
nantinya akan diturunkan dari class `Character`.

Nantinya class `xxxUser` ini akan digunakan untuk meng-`instantiate` data yang
ada pada `gacha.csv` berdasarkan tipe senjata yang digunakan dengan list 
sebagai berikut:
- `SwordUser` untuk karakter dengan tipe senjata `Pedang`
- `SpearUser` untuk karakter dengan tipe senjata `Tombak`
- `BowUser` untuk karakter dengan tipe senjata `Panah`
- `BookUser` untuk karakter dengan tipe senjata `Buku`

Untuk `SwordUser` dan `SpearUser` memiliki sebuah property tambahan dengan 
nama `skill`

Untuk `BowUser` dan `BookUser` memiliki sebuah property tambahan dengan 
nama `talent`

### Release 2 - Let's Make the Machine
- Encapsulation & Logic -

Developer juga diminta untuk membuat suatu class tambahan bernama 
`GachaGenerator` 

class `GachaGenerator` memiliki struktur sebagai berikut:
- `constructor`, menerima sebuah parameter yang digunakan untuk iterasi
- property `iterator`, digunakan untuk menyimpan parameter iterasi dari 
  constructor parameter
- property `characterLists`, digunakan untuk menyimpan seluruh karakter yang 
  sudah menjadi versi oop (instance), harus bersifat *rahasia* dan tidak boleh 
  diketahui umum
- property `results`, digunakan untuk menyimpan hasil dari gacha, harus bersifat
  *rahasia*, 
  memiliki data awal berupa kumpulan data yang kosong
- method `generateList`, digunakan untuk membuat listing dari data `gacha.csv` 
  dan dimasukkan ke dalam property `characterLists` 
- method `generateRandomizer`, digunakan untuk membuat list dari hasil gacha 
  sejumlah property `iterator` dan dimasukkan ke dalam property `results`

### Release 3 - One Method Many Meanings
- Polymorphism (Method Override) -

Pada tahap ini developer diminta untuk mengembangkan suatu method yang terdapat 
pada class `xxxUser` dengan nama methodnya adalah `showMe`, yang digunakan untuk
menampilkan output kepada pemain berdasarkan tipe senjata yang dimilikinya 
sebagai berikut:
- `SwordUser` - `Hi I'm Swordie <name> with Skill <skillName>`
- `SpearUser` - `Hi I'm Speardie <name> with Skill <skillName>`
- `BowUser` - `Hi I'm Archer <name> with Talent <talentName>`
- `BookUser` - `Hi I'm Nerdie <name> with Talent <talentName>`

Sehingga method ini dapat dijalankan ketika `GachaGenerator` telah berhasil 
mengenerate gacha yang ada.

### Closing
That's All Folks