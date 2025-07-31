const db = require("../config/db");

exports.getAllVendors = (req, res) => {
  const sql = "SELECT * FROM vendors";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching vendors:", err);
      return res.status(500).json({ error: "Failed to fetch vendors" });
    }
    res.json(results);
  });
};
