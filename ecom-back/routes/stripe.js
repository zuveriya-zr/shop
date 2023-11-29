const express = require("express");
const router = express.Router();

const { route } = require("./user-r");

const { createPaymentIntent } = require("../controllers/stripe");
const { authChecking } = require("../middlewares/auth-m");


router.post("/create-payment-intent", authChecking, createPaymentIntent);

module.exports = router;
