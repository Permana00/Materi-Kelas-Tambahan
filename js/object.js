var siswa = {
    namaDepan : "raqqa",
    namaBelakang : "ivan",

    tampilkan : function () {
        console.log(`Nama ${this.namaDepan} ${this.namaBelakang}`);
    }
}


console.log(siswa.namaDepan);
siswa.tampilkan()