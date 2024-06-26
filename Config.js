const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const db = process.env.MONGODB_URI;
module.exports = mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((then) => {
    console.log(`Connected to database on port - ${process.env.PORT}`);
  })
  .catch((e) => {
    console.log(e);
  });
