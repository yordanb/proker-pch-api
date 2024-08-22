const mysql = require('mysql2/promise');

// Membuat pool koneksi ke database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_proker_pch',
    waitForConnections: true,
    connectionLimit: 10,  // Jumlah maksimum koneksi di dalam pool
    queueLimit: 0
});

// Fungsi untuk menghubungkan dan menguji koneksi ke database
const connectDB = async () => {
    try {
        const connection = await pool.getConnection();  // Mendapatkan koneksi dari pool
        console.log('Connected to the database');
        connection.release();  // Melepaskan koneksi kembali ke pool setelah digunakan
    } catch (err) {
        console.error('Error connecting to the database:', err.message);
        process.exit(1);  // Menghentikan proses jika koneksi gagal
    }
};

connectDB();  // Memanggil fungsi untuk menghubungkan ke database

// Mengekspor pool sebagai promise untuk digunakan di seluruh aplikasi
module.exports = pool;