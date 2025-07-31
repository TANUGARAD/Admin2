const express = require("express");
const router = express.Router();
const controller = require("../controllers/restaurantController");

router.get("/restaurants", controller.getAllRestaurants);

module.exports = router;
