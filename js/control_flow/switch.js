var barang = prompt(
  "Silahkan pilih barang yg ingin anda pesan \n1. Pakaian \n2. Sepatu \n3. Tas \n4. Topi \nMasukkan angka untuk memilih"
);

switch (barang) {
  case "1":
    alert("Baik pakaian pesanan anda akan kami proses");
    break;
  case "2":
    alert("Baik sepatu pesanan anda akan kami proses");
    break;
  case "3":
    alert("Baik tas pesanan anda akan kami proses");
    break;
  case "4":
    alert("Baik topi pesanan anda akan kami proses");
  default:
    alert("Anda memasukkan pilihan yg salah");
    break;
}
