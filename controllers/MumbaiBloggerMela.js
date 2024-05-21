const nodemailer = require("nodemailer");

const MumbaiBloggerForm = require("../model/MumbaiBloggerMela");

// Nodemailer Configuration
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "atstaytravel@gmail.com",
//     pass: "emqr amor owjl fpax",
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });
const createMumbaiBloggerForm = async (req, res) => {
  // const { email } = req.body;

  // console.log(email);

  // Create Nodemailer email options
  // const mailOptions = {
  //   from: "atstaytravel@gmail.com",
  //   to: email,
  //   subject: "Invoice",
  //   text: "Your payment is Successful thankyou for your reservation",
  // };

  try {
    const modelForm = await MumbaiBloggerForm.create(req.body);

    // const info = await transporter.sendMail(mailOptions);
    // console.log("Email sent:", info);
    res
      .status(201)
      .json({ message: "Saved to database successfully!", modelForm });
  } catch (error) {
    next(error);
  }
};

module.exports = { createMumbaiBloggerForm };
