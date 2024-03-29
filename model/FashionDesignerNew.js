const mongoose = require("mongoose");
const moment = require("moment-timezone");

// Define the schema
const DFCSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  insta: String,
  fb: String,
  dresses: Number,
  labelName: String,
  city: String,
  years: Number,
  twitter: String,
  amount: Number,
  date: {
    type: Date,
    default: () => moment().tz("Asia/Kolkata").format(),
  },
  razorpay_order_id: String,
  razorpay_payment_id: String,
});

// Create a model using the schema
const FashionDesignerNew = mongoose.model("FashionDesignerNew", DFCSchema);

module.exports = FashionDesignerNew;
