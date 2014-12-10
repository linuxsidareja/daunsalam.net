foto = new Array();
ketf = new Array();

foto[0] = "foto/lebahdanbunga.jpg";
ketf[0] = "Serangga sejenis lebah, atau memang lebah, sedang mencari sari bunga. Difoto menggunakan lensa makro cara sederhana dengan menambahkan kaca pembesar di lensa utama kamera. Bunga ini tumbuh di halaman rumah, di Bogor. Alam memang menyajikan harmoni nan sempurna.";
foto[1] = "foto/senjadikotonanampek.jpg";
ketf[1] = "Siluet pohon kelapa dan kubah sebuah musholla di daerah Koto Nan Ampek, Payakumbuh. Diambil waktu senja sesaat sebelum maghrib, tiga hari setelah lebaran Idul Fitri tahun 2009";
foto[2] = "foto/capungmerah.jpg";
ketf[2] = "Capung merah yang hinggap di tali jemuran. Pagi menjelang siang di dekat kolam di Balai Jaring, Koto Nan Gadang, Payakumbuh. Foto makro ini juga menggunakan kaca pembesar yang disambungkan ke lensa utama kamera.";
foto[3] = "foto/dindingharau.jpg";
ketf[3] = "Sebuah dinding terjal yang tertancap di lembah Harau, Payakumbuh. Goresan yang tampak karena perbedaan unsur yang berpadu pada dinding batu ini. Tingginya? Bandingkan dengan pepohonan yang terlihat di bagian dasar.";
foto[4] = "foto/heler.jpg";
ketf[4] = "Pada sebuah penggilingan padi. Di sini padi dijadikan beras. Bising mesin, tumpukan karung, sekam, dedak, adalah sesuatu yang akrab untuk ditemui. Pernahkah tuan berkunjung ke tempat semacam ini?";
foto[5] = "foto/prasastibs.jpg";
ketf[5] = "Sepotong dari sebuah prasasti yang ditulis (tepatnya diukir) di permukaan batu. Prasasti ini berada di kota Batusangkar. Saya tak tahu pasti ini berasal dari tahun berapa. Bisakah Anda membacanya?";
foto[6] = "foto/kupudanbunga.jpg";
ketf[6] = "Kupu-kupu, di pagi hari. Keberadaan bunga memang mengundang kehadiran banyak serangga. Kupu-kupu adalah salah satu di antara mereka. Sebuah anugrah amat indah dari sang Maha Pencipta.";
foto[7] = "foto/kepalaayam.jpg";
ketf[7] = "Ayam ini biasanya terhidang di restoran cepat saji, tentu saja setelah digoreng. Difoto dalam kandang milik seorang kawan yang menjadi peternak. Keberadaan makhluk ini memang untuk dijadikan makanan.";
foto[8] = "foto/pinang.jpg";
ketf[8] = "Agustus 2008. Entah sejak kapan, panjat pinang menjadi atraksi penting perayaan hari kemerdekaan republik ini. Perjuangan mendapatkan sesuatu yang disimpan di pucuk tiang yang licin ini memang bukan pekerjaan mudah. Perlu nyali, kerjasama dan tenaga ekstra.";

var maks = 8;
i = Math.round(Math.random() * maks);

function gantifoto() {
    document.getElementById("fotoku").src = foto[i];
    document.getElementById("ketfotoku").innerHTML = ketf[i];
    i++;
    if (i > maks) { i = 0; }
}

gantifoto();
