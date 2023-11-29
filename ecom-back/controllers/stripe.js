const User = require("../models/user");
const Cart = require("../models/cart");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
  

  // 1 find user
  const user = await User.findOne({ email: req.user.email })
  // 2 get user cart total
 try{
  const { cartTotal } = await Cart.findOne({
    orderdBy: user._id,
  });
  // console.log("CART TOTAL", cartTotal, "AFTER DIS%", totalAfterDiscount);

  let finalAmount = 0;

  
    finalAmount = cartTotal * 100;
  

  // create payment intent with order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: finalAmount,
    currency: "INR",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    cartTotal,
    payable: finalAmount,
  });
 }
 catch(err){
  console.log(err)
  res.status(400).send("updating product failed..!!")
}
};
