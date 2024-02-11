const moment = require("moment-timezone");
const mongoose = require("mongoose");

// Define the schema
const ExperiencedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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
const ExperiencedDesignerNew = mongoose.model(
  "ExperiencedDesignerNew",
  ExperiencedSchema
);

module.exports = ExperiencedDesignerNew;
