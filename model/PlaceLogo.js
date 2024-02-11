const moment = require("moment-timezone");
const mongoose = require("mongoose");

// Define the schema
const placeLogoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  insta: String,
  city: String,
  gst: String,
  add: String,
  amount: Number,
  date: {
    type: Date,
    default: () => moment().tz("Asia/Kolkata").format(),
  },
  razorpay_order_id: String,
  razorpay_payment_id: String,
});

// Create a model using the schema
const PlaceLogo = mongoose.model("PlaceLogo", placeLogoSchema);

module.exports = PlaceLogo;
