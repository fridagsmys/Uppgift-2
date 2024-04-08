const express = require("express");
const { createCheckoutSession } = require("./stripe.controller");
const router = express.Router();

router.post('/create_checkout_session', createCheckoutSession)

module.exports = router