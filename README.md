# Manajemen Karyawan

## Pseudocode Program hingga Fitur Add Karyawan dan Display Karyawan

1. Definisikan objek Karyawan dengan properti nama, jabatan, dan gaji.
2. Buat array `daftarKaryawan` untuk menyimpan data karyawan.
3. Buat fungsi `tambahKaryawan` untuk menambahkan karyawan ke dalam daftar.
4. Buat fungsi `tampilkanKaryawanDiHTML` untuk menampilkan daftar karyawan di elemen HTML.
5. Tambahkan event listener pada form untuk menangani penambahan karyawan baru ketika form disubmit.

## Penjelasan dengan Probing Questions

### 1. Apa yang harus saya lakukan di file JavaScript?

Jawaban: Karena tujuan kita adalah untuk mengelola data karyawan, kita harus mendefinisikan objek Karyawan terlebih dahulu. Setelah itu, kita perlu membuat fungsi-fungsi yang diperlukan untuk menambah dan menampilkan karyawan dalam daftar.

### 2. Bagaimana cara mendefinisikan objek Karyawan?

Jawaban: Kita dapat menggunakan constructor function untuk mendefinisikan objek Karyawan yang memiliki properti nama, jabatan, dan gaji.

**Code:**
```javascript
function Karyawan(nama, jabatan, gaji) {
    this.nama = nama;
    this.jabatan = jabatan;
    this.gaji = gaji;
}

Karyawan.prototype.tampilkanDetail = function() {
    return `${this.nama} - ${this.jabatan} - ${this.gaji}`;
};
```

### 3. Bagaimana cara menambahkan karyawan ke dalam daftar?

Jawaban: Kita perlu membuat array daftarKaryawan untuk menyimpan data karyawan, lalu membuat fungsi tambahKaryawan untuk menambahkan objek karyawan ke dalam array tersebut.

**Code:**
```javascript
let daftarKaryawan = [];

function tambahKaryawan(karyawan) {
    daftarKaryawan.push(karyawan);
}
```

### 4. Bagaimana cara menampilkan daftar karyawan di HTML?

Jawaban: Kita perlu membuat fungsi tampilkanKaryawanDiHTML yang akan mengupdate elemen HTML untuk menampilkan daftar karyawan yang ada dalam array daftarKaryawan.

**Code:**
```javascript
function tampilkanKaryawanDiHTML() {
    const ulElement = document.getElementById("daftar-karyawan");
    ulElement.innerHTML = "";

    daftarKaryawan.forEach(karyawan => {
        const liElement = document.createElement("li");
        liElement.textContent = karyawan.tampilkanDetail();
        ulElement.appendChild(liElement);
    });
}
```

### 5. Bagaimana cara menambahkan karyawan baru ketika form disubmit?

Jawaban: Kita perlu menambahkan event listener pada form yang akan menangani penambahan karyawan baru ketika form disubmit. Event listener ini akan mengambil data dari input form, membuat objek Karyawan baru, menambahkannya ke daftar, dan kemudian menampilkan daftar yang diperbarui.

**Code:**
```javascript
document.getElementById('form-karyawan').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('input-nama').value;
    const jabatan = document.getElementById('input-jabatan').value;
    const gaji = document.getElementById('input-gaji').value;

    const karyawan = new Karyawan(nama, jabatan, gaji);
    tambahKaryawan(karyawan);
    tampilkanKaryawanDiHTML();

    // Mengosongkan form setelah menambahkan karyawan
    document.getElementById('input-nama').value = "";
    document.getElementById('input-jabatan').value = "";
    document.getElementById('input-gaji').value = "";
});
```

### 6. Bagaimana cara menampilkan daftar karyawan di HTML?

Jawaban: Kita perlu membuat fungsi tampilkanKaryawanDiHTML yang akan mengupdate elemen HTML untuk menampilkan daftar karyawan yang ada dalam array daftarKaryawan.

**Code:**
```javascript
function tampilkanKaryawanDiHTML() {
    const ulElement = document.getElementById("daftar-karyawan");
    ulElement.innerHTML = "";

    daftarKaryawan.forEach(karyawan => {
        const liElement = document.createElement("li");
        liElement.textContent = karyawan.tampilkanDetail();
        ulElement.appendChild(liElement);
    });
}
```


##### Penjelasan:

- ulElement: Kita mengambil elemen ul dari HTML dengan document.getElementById("daftar-karyawan").

- ulElement.innerHTML = "": Kita mengosongkan elemen ul agar daftar karyawan yang baru ditambahkan dapat ditampilkan dari awal.

- daftarKaryawan.forEach: Kita menggunakan metode forEach untuk mengiterasi setiap karyawan dalam array daftarKaryawan

- liElement.textContent = karyawan.tampilkanDetail(): Kita membuat elemen li baru untuk setiap karyawan dan mengisinya dengan detail karyawan.

- ulElement.appendChild(liElement): Kita menambahkan elemen li yang baru dibuat ke dalam ul.

### 7. Bagaimana cara mengosongkan form setelah menambahkan karyawan?

Jawaban: Setelah menambahkan karyawan baru ke dalam daftar, kita perlu mengosongkan input form agar pengguna dapat memasukkan data karyawan baru tanpa harus menghapus data yang lama secara manual.

**Code:**
```javascript
document.getElementById('input-nama').value = "";
document.getElementById('input-jabatan').value = "";
document.getElementById('input-gaji').value = "";

```


##### Penjelasan:

- Kita mengambil elemen input masing-masing (input-nama, input-jabatan, input-gaji) menggunakan document.getElementById.

- Kita mengosongkan nilai input tersebut dengan menetapkan value menjadi string kosong ("").

### 8. Bagaimana cara menambahkan event listener pada form?

Jawaban: Kita perlu menambahkan event listener pada form yang akan menangani penambahan karyawan baru ketika form disubmit. Event listener ini akan mengambil data dari input form, membuat objek Karyawan baru, menambahkannya ke daftar, dan kemudian menampilkan daftar yang diperbarui.

**Code:**
```javascript
document.getElementById('form-karyawan').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('input-nama').value;
    const jabatan = document.getElementById('input-jabatan').value;
    const gaji = document.getElementById('input-gaji').value;

    const karyawan = new Karyawan(nama, jabatan, gaji);
    tambahKaryawan(karyawan);
    tampilkanKaryawanDiHTML();

    // Mengosongkan form setelah menambahkan karyawan
    document.getElementById('input-nama').value = "";
    document.getElementById('input-jabatan').value = "";
    document.getElementById('input-gaji').value = "";
});

```


##### Penjelasan:

- document.getElementById('form-karyawan').addEventListener('submit', function(e): Kita menambahkan event listener pada form yang akan dipicu ketika form disubmit.

- e.preventDefault(): Mencegah perilaku default dari form submit yang akan melakukan refresh halaman.

- Mengambil nilai input: Mengambil nilai dari input form (nama, jabatan, gaji).

- Membuat objek Karyawan baru: Membuat objek Karyawan baru dengan nilai input yang telah diambil.

- tambahKaryawan(karyawan): Menambahkan objek Karyawan baru ke dalam daftar.

- tampilkanKaryawanDiHTML(): Menampilkan daftar karyawan yang telah diperbarui di HTML.

- Mengosongkan form: Mengosongkan input form setelah karyawan ditambahkan.