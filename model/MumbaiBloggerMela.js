const moment = require("moment-timezone");
const mongoose = require("mongoose");

// Define the schema
const MumbaiBloggerFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  insta: {
    type: String,
    required: true,
  },
  followersRange: {
    type: String,
    required: true,
  },
  city: String,
  guestType: {
    type: String,
    required: true,
  },
  influence: {
    type: String,
    required: true,
  },
  smallVideo: {
    type: String,
    required: true,
  },

  amount: Number,
  date: {
    type: Date,
    default: () => moment().tz("Asia/Kolkata").format(),
  },
  razorpay_order_id: String,
  razorpay_payment_id: String,
});

// Create a model using the schema
const MumbaiBloggerForm = mongoose.model(
  "MumbaiBloggerForm",
  MumbaiBloggerFormSchema
);

module.exports = MumbaiBloggerForm;
