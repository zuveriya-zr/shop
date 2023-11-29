const express = require("express");
const { auth } = require("../firebase");

const router = express.Router();

// middlewares
const { authChecking, adminCheck } = require("../middlewares/auth-m");

const { orders, orderStatus } = require("../controllers/admin");

// routes
router.get("/admin/orders", authChecking, adminCheck, orders);
router.put("/admin/order-status", authChecking, adminCheck, orderStatus);

module.exports = router;
