function munculkanHasil() {
    // MENGINDENTIFIKASIKAN UNTUK MEMANGGIL ID DAN MENAMBAHKAN USER MEMASUKKAN NILAI
    const inputUmur= document.getElementById("inputUmur")
    const inputUmurValue= inputUmur.value;

    // PEMANGGILAN KALENDER HANYAA MEMANGGIL TAHUN
    const tahunSekarang = new Date().getFullYear();

    // RUMUS MENGHITUNG UMUR
    const rumus = tahunSekarang - inputUmurValue;

    // VALIDASI UNTUK MENAMPILKAN SEBUAH HASIL MENJADI TEXT MENGGUNAKAN innerHTML
    const hasil=document.getElementById("hasil")
    hasil.innerHTML= "UMUR anda sekarang adalah: " + rumus + " Tahun"; 

    // MENGINDENTIFIKASIKAN ID PERIRNGATAN
    const peringatan = document.getElementById("peringatan")

    //HASIL DI HILANGKAN KETIKA USER TIDAK MENGINPUT SEBUAH NILAI/KOSONG DAN  LOGIC JIKA USER TIDAK MENGINPUT NILAI SAMA SEKALI MAKA MUNCUL PERINGATAN
    if(inputUmurValue === "") {
        hasil.style= "display: none;"
        peringatan.innerHTML = "Mohon masukkan tahun kelahiran anda dengan valid!"
        peringatan.style="color: red;"
    }

    if(inputUmurValue <= 9999 && inputUmurValue >= 2024) {
        hasil.style= "display: none;"
        peringatan.innerHTML = "Tahun kelahiran tidak boleh lebih dari tahun saat ini!"
        peringatan.style="color: red;"
    }

}

function saatDiEnter (event) {
    if(event.key === "Enter") {
        munculkanHasil()
    }
}

function maximumInput() {
    const inputUmur = document.getElementById("inputUmur")
    const inputUmurValue=inputUmur.value

    inputUmur.value=inputUmurValue.slice(0, 4)
}
