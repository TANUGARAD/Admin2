const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",          // 🔁 Replace with your DB username
  password: "Tanu@1402",  // 🔁 Replace with your DB password
  database: "Admin1"
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    throw err;
  }
  console.log("✅ Connected to MySQL");
});

module.exports = db;
