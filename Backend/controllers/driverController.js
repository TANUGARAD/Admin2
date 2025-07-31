const db = require("../config/db");

// GET /api/drivers
exports.getAllDrivers = (req, res) => {
  const query = "SELECT * FROM drivers ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to fetch drivers" });
    res.json(results);
  });
};

// POST /api/drivers
exports.createDriver = (req, res) => {
  const { first_name, last_name, email, phone, zone, latitude, longitude, active } = req.body;

  const query = `
    INSERT INTO drivers (first_name, last_name, email, phone, zone, latitude, longitude, active)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [first_name, last_name, email, phone, zone, latitude, longitude, active];

  db.query(query, values, (err, result) => {
    if (err) return res.status(500).json({ error: "Insert failed" });

    res.status(201).json({ id: result.insertId, ...req.body });
  });
};
