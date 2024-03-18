const moment = require("moment-timezone");
const mongoose = require("mongoose");

// Define the schema
const BloggerFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  insta: String,
  town: String,
  number: String,
  amount: Number,
  date: {
    type: Date,
    default: () => moment().tz("Asia/Kolkata").format(),
  },
  razorpay_order_id: String,
  razorpay_payment_id: String,
});

// Create a model using the schema
const BloggerForm = mongoose.model("BloggerForm", BloggerFormSchema);

module.exports = BloggerForm;
