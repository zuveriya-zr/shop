const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 5,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    //laptop ==>cat., sub cat=> [hp,apple,lenovo]
    subs: [
      {
        type: ObjectId,
        ref: "Sub",
      },
    ],
    quantity: Number,
    //sold=1+++++ 
    sold: {
      type: Number,
      default: 0,
    },
    // images: {
    //   type: Array,
    // },
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
