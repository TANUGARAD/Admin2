const db = require("../config/db");

exports.getAllRestaurants = (req, res) => {
  const sql = "SELECT * FROM restaurants";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Query failed" });
    res.json(results);
  });
};
