var bantuan  = "bantuan : untuk menampilkan bantuan ini\n";
    bantuan += "kosong  : membersihkan layar\n";
    bantuan += "daftar  : daftar tempat yang masih tersedia\n";
    bantuan += "pesan   : memesan tempat duduk\n";
    bantuan += "          pesan id_tempat_duduk\n";
    bantuan += "batal   : membatalkan pesanan\n";
    bantuan += "          batal id_pesanan\n";

function kirimperintah() {
  teks_perintah = document.perintah.tulis.value;
  if (teks_perintah == "bantuan") {
    document.respon.area.value = bantuan;
  }
  if (teks_perintah == "kosong") {
    document.respon.area.value = "";
  }
  document.perintah.aksi.value = teks_perintah;
  document.perintah.tulis.value = "";
  document.perintah.tulis.focus();
}
