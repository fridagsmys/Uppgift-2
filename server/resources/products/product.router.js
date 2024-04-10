const express = require("express");
const { fetchProducts } = require("./products.controller");
const router = express.Router();

router.get("/all", fetchProducts);

module.exports = router;
