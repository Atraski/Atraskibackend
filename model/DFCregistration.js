const mongoose = require("mongoose");

// Define the schema
const DFCSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  insta: String,
  fb: String,
  dresses: Number, // Assuming dresses is an array of strings
  labelName: String,
  city: String,
  years: Number,
  twitter: String,
});

// Create a model using the schema
const DFC = mongoose.model("DFCmodel", DFCSchema);

module.exports = DFC;
