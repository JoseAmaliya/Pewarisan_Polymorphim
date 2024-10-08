class Toko {
    constructor(toko, makanan) {
        this.toko = toko;
        this.makanan = makanan;
    }

    tampilkanInformasi() {
        console.log(`Toko: ${this.toko}, Makanan: ${this.makanan}`);
    }
}

// Definisi kelas turunan
class Bahan extends Toko {
    constructor(toko, makanan, noAntri) {
        super(toko, makanan); // Memanggil konstruktor kelas induk
        this.noAntri = noAntri;
    }

    tampilkanInformasi() {
        super.tampilkanInformasi(); // Memanggil metode dari kelas induk
        console.log(`NO.ANTRI: ${this.noAntri}`);
    }
}

// Penggunaan kelas turunan
const Bahan1 = new Bahan("Sejahtera", "Mie", "187");
Bahan1.tampilkanInformasi();

// Definisi kelas induk
class Toko {
    tampilkanMenu() {
        console.log("Menu: Mie");
    }
}

// Definisi kelas turunan
class Bahan extends Toko {
    tampilkanBahan() {
        console.log("Bahan: Bawang, Minyak, Cabe");
    }
}

class NoAntrian extends Toko {
    tampilkanNo() {
        console.log("No: 187");
    }
}

class Minuman extends Toko {
    tampilkanJenis() {
        console.log("Jenis: Jus");
    }
}

// Menggunakan polimorfisme
const toko1 = new Toko();
const bahan1 = new Bahan();
const no1= new NoAntrian();
const jenis1 = new Minuman();

toko1.tampilkanMenu();    
bahan1.tampilkanBahan(); 
no1.tampilkanNo();     
jenis1.tampilkanJenis();
