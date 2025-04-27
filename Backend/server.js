const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

// Create MySQL connection pool instead of single connection
const db = mysql.createPool({
  connectionLimit: 10, // Adjust based on your needs
  host: "localhost",
  user: "root",
  password: "", // Make sure this matches your MySQL password
  database: "umkm",
});

// Test the database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database!');
  connection.release();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/kabkota", (req, res) => {
  const sql = "SELECT kab.*, prov.nama AS nama_provinsi FROM kabkota kab LEFT JOIN provinsi prov ON kab.provinsi_id = prov.id ORDER BY prov.nama ASC, kab.nama ASC";
  db.query(sql, (err, data) => {
    if (err) {
      console.error('MySQL query error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.json(data);
  });
});

app.get("")

// Note: Fixed port number inconsistency (was 8081 in listen, 8001 in console.log)
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});