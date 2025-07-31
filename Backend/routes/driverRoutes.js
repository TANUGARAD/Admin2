const express = require("express");
const router = express.Router();
const controller = require("../controllers/driverController");

router.get("/drivers", controller.getAllDrivers);
router.post("/drivers", controller.createDriver);

module.exports = router;
