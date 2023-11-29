const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");
const Order = require("../models/order");

exports.userCart = async (req, res) => {
  // console.log(req.body); // {cart: []}
  const { cart } = req.body;

  let products = [];

  const user = await User.findOne({ email: req.user.email })

  // check if cart with logged in user id already exist
  let cartOfThisUser = await Cart.findOne({ orderdBy: user._id })

  if (cartOfThisUser) {
    cartOfThisUser.deleteOne();
    console.log("removed old cart");
  }

  for (let i = 0; i < cart.length; i++) {
    let object = {};

    object.product = cart[i]._id;
    object.count = cart[i].count;
    // get price for creating total
    let productFromDb = await Product.findById(cart[i]._id)
      .select("price")
      
    object.price = productFromDb.price;

    products.push(object);
  }

  // console.log('products', products)

  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal = cartTotal + products[i].price * products[i].count;
  }

  // console.log("cartTotal", cartTotal);

  let newCart = await new Cart({
    products,
    cartTotal,
    orderdBy: user._id,
  }).save();

  console.log("new cart ----> ", newCart);
  res.json({ ok: true });
};

exports.getUserCart = async (req, res) => {
  const user = await User.findOne({ email: req.user.email })

  let cart = await Cart.findOne({ orderdBy: user._id })
    .populate("products.product", "_id title price ")
    

  const { products, cartTotal } = cart;
  res.json({ products, cartTotal });
};

exports.emptyCart = async (req, res) => {
  console.log("empty cart");
  const user = await User.findOne({ email: req.user.email })

  const cart = await Cart.findOneAndDelete({ orderdBy: user._id })
  res.json(cart);
};

exports.saveAddress = async (req, res) => {
  const userAddress = await User.findOneAndUpdate(
    { email: req.user.email },
    { address: req.body.address }
  )
console.log("address of user ==>",userAddress)
  res.json({ ok: true });
};


exports.createOrder = async (req, res) => {
  // console.log(req.body);
  // return;
  const { paymentIntent } = req.body.stripeResponse;

  const user = await User.findOne({ email: req.user.email })

  let { products } = await Cart.findOne({ orderdBy: user._id })

  let newOrder = await new Order({
    products,
    paymentIntent,
    orderdBy: user._id,
  }).save();

  // decrement quantity and  increment sold count 
  let bulkOption = products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product._id }, // IMPORTANT item.product
        // q=>10 (2) => 10-2=8   | sold => 2+5
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });

  let updated = await Product.bulkWrite(bulkOption, {});
  console.log("PRODUCT QUANTITY-- AND SOLD++", updated);

  console.log("NEW ORDER SAVED", newOrder);
  res.json({ ok: true });
};

exports.orders = async (req, res) => {
  let user = await User.findOne({ email: req.user.email })

  let userOrders = await Order.find({ orderdBy: user._id })
    .populate("products.product")

  res.json(userOrders);
};
