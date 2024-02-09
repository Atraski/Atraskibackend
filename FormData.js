// const mongoose= require('mongoose')
const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,
  name: String,
  email: String,
  Town: String,
  Number: String,
  quantities: Object,
  amount: Number,
});

const FormData = mongoose.model("FormData", formDataSchema);

module.exports = FormData;

const formDataSchema1 = new mongoose.Schema({
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,
  name: String,
  email: String,
  Town: String,
  Number: String,
  Instagram: String,
  amount: Number,
});

const FormData1 = mongoose.model("FormData1", formDataSchema1);

module.exports = FormData1;

const formDataSchema2 = new mongoose.Schema({
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,
  name: String,
  email: String,
  Town: String,
  amount: Number,
});

const FormData2 = mongoose.model("ModelResgistration", formDataSchema2);

module.exports = FormData2;

const formDataSchema3 = new mongoose.Schema({
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,
  name: String,
  email: String,
  Town: String,
  amount: Number,
});

const FormData3 = mongoose.model("Attendees", formDataSchema3);

module.exports = FormData3;

const formDataSchema4 = new mongoose.Schema({
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,
  name: String,
  email: String,
  Town: String,
  Instagram: String,
  amount: Number,
});

const FormData4 = mongoose.model("fashionDesigner", formDataSchema4);

module.exports = FormData4;
