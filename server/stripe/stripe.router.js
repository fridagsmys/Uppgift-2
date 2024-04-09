const express = require("express");
const { createCheckoutSession, verifySession } = require("./stripe.controller");
const router = express.Router();

router.post("/create_checkout_session", createCheckoutSession);
router.post("/verify_session", verifySession);

module.exports = router;
