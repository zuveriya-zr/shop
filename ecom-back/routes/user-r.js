const express = require("express");

const router = express.Router();

const {
  userCart,
  getUserCart,
  emptyCart,
  saveAddress,
  createOrder,
  orders,
} = require("../controllers/user-c");
const { authChecking } = require("../middlewares/auth-m");

router.post("/user/cart", authChecking, userCart); // save cart
router.get("/user/cart", authChecking, getUserCart); // get cart
router.delete("/user/cart", authChecking, emptyCart); // empty cart
router.post("/user/address", authChecking, saveAddress);

router.post("/user/order", authChecking, createOrder);
router.get("/user/orders", authChecking, orders);



module.exports = router;
