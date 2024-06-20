// Definisi Objek Karyawan
function Karyawan(nama, jabatan, gaji) {
    this.nama = nama;
    this.jabatan = jabatan;
    this.gaji = gaji;
}

Karyawan.prototype.tampilkanDetail = function() {
    return `${this.nama} - ${this.jabatan} - ${this.gaji}`;
};

// Menambahkan karyawan ke daftar
let daftarKaryawan = [];

function tambahKaryawan(karyawan) {
    daftarKaryawan.push(karyawan);
}

// Menampilkan daftar karyawan di HTML
function tampilkanKaryawanDiHTML() {
    const ulElement = document.getElementById("daftar-karyawan");
    ulElement.innerHTML = "";

    daftarKaryawan.forEach(karyawan => {
        const liElement = document.createElement("li");
        liElement.textContent = karyawan.tampilkanDetail();
        ulElement.appendChild(liElement);
    });
}

// Event Listener untuk form
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
