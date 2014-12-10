<?php

$aksi = trim($HTTP_POST_VARS['aksi']);
$aksi = substr($aksi,0,50);
$aksi = ereg_replace(" +"," ",$aksi);

$respon = "Perintah tak bisa dikenali.\\nKetik bantuan untuk melihat daftar perintah.\\n";
$random1 = rand(1000,9999);
$random2 = rand(5,11);
$kata = explode(" ",$aksi);

if ($kata[0] == "daftar") {
  $respon = "Daftar tempat duduk yang masih tersedia.\\n";
  for ($i = 0; $i < $random2; $i++) {
    $random1 = rand(1000,9999);
    $respon .= "+ ID $random1\\n";
  }
}
if ($kata[0] == "pesan") {
  $respon  = "Anda melakukan pemesanan tempat duduk $kata[1].\\n";
  $respon .= "ID pesanan anda $random1\\n";
}
if ($kata[0] == "batal") {
  $respon  = "Anda melakukan pembatalan pemesanan.\\n";
  $respon .= "ID yang dibatalkan $kata[1]\\n";
}
if ($kata[0] == "kosong" || $kata[0] == "bantuan") {
  $respon = "";
}

?>

<html>
<head>
<script>
function respon() {
  parent.document.respon.area.value += "\n\n";
  <?php echo "parent.document.respon.area.value += '$respon';\n"; ?>
  parent.document.respon.area.scrollTop = parent.document.respon.area.scrollHeight;
  parent.document.perintah.tulis.focus();
}
</script>
</head>
<body onLoad="respon()">
</body>
</html>