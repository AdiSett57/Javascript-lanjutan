//!! Cara untuk membuat object javascript

//!! 1. Object Literal

// Code :
// let mahasiswa = {
//   nama: "Adi",
//   healty: 50,
//   makan: function (porsi) {
//     this.healty = this.healty + porsi;
//     console.log(
//       `Hello ${this.nama}, selamat makan. Healty anda sekarang ${this.healty}`
//     );
//   },
// };

// untuk testing silahkan tuliskan mahasiswa diconsole atau mahasiswa.makan(20) untuk memanggil functionnya.

//!! 2. Function Declaration
// Wajib deklarasi variabel dan juga return sesuatu
// Code :
// function mahasiswa(nama, healty) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.healty = healty;

//   mahasiswa.makan = function (porsi) {
//     this.healty += porsi;
//     console.log(
//       `Hello ${this.nama}, selamat makan. Healty anda sekarang ${this.healty}`
//     );
//   };

//   mahasiswa.main = function (porsi) {
//     this.healty -= porsi;
//     console.log(
//       `Hello ${this.nama}, energi anda berkurang. Healty anda sekarang ${this.healty}`
//     );
//   };

//   return mahasiswa;
// }

// isi objek mahasiswa
// let adi = mahasiswa("Adi", 70);

//!! 3. Construction function
// keyword new
// code :
// function mahasiswa(nama, healty) {
//   this.nama = nama;
//   this.healty = healty;

//   this.makan = function (porsi) {
//     this.healty += porsi;
//     console.log(
//       `Hello ${this.nama}, selamat makan. Healty anda sekarang ${this.healty}`
//     );
//   };

//   this.main = function (porsi) {
//     this.healty -= porsi;
//     console.log(
//       `Hello ${this.nama}, energi anda berkurang. Healty anda sekarang ${this.healty}`
//     );
//   };
// }

// isi objek mahaiswa
// let adi = new mahasiswa("Adi", 40);

//!! 4.Object Create
// code
const methodMahasiswa = {
  makan: function (porsi) {
    this.healty += porsi;
    console.log(
      `Hello ${this.nama}, selamat makan. Healty anda sekarang ${this.healty}`
    );
  },
  main: function (porsi) {
    this.healty -= porsi;
    console.log(
      `Hello ${this.nama}, energi anda berkurang. Healty anda sekarang ${this.healty}`
    );
  },
};

function mahasiswa(nama, healty) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.healty = healty;
  return mahasiswa;
}
// isi objek mahasiswa
let adi = mahasiswa("Adi", 70);
