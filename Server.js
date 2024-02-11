const express = require("express");
require("dotenv").config({ path: "./.env" });
const crypto = require("crypto");
const app = express();
// require('dotenv').config({ path: './config.env' });
require("./Config");
const form = require("./FormData");
const form1 = require("./FormData");
var instance = require("./Razorpay");
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(express.json());
const cors = require("cors");
app.use(cors());
const form2 = require("./FormData");
const form3 = require("./FormData");
const corsOptions = {
  origin: "https://atraski.com",
  // origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
const path = require("path");
const { createUser } = require("./controllers/FashionDesignerNew");
const {
  createExperiencedDesigner,
} = require("./controllers/ExperiencedDesignerNew");
const { createPlaceLogo } = require("./controllers/PlaceLogo");

app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000);

app.post("/Order", async (req, resp) => {
  const option = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(option);
  console.log(order);
  resp.status(200).json({
    success: true,
    order,
  });
});

app.get("/key", (req, resp) => {
  resp.json({ key: instance.key_id });
});

// app.post('/verification', async (req, resp) => {
//   try {
//     // Log the received data
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       name,
//       email,
//       Town,
//       Number,
//       quantity,
//       aamount
//     } = req.body;

//     console.log('Received form data:', req.body);

//   const body = razorpay_order_id + '|' + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac('sha256', 'wyTuLIkM1pDzjPnYg9E3NV6E')
//     .update(body.toString())
//     .digest('hex');

//     if (expectedSignature === razorpay_signature) {

//       // Combine the form data and Razorpay response
//       const formData = new form({
//         name: name,
//         email: email,
//         Town: Town,
//         Number: Number,
//         quantity: quantity,
//         aamount: aamount,
//         razorpay_order_id: razorpay_order_id,
//         razorpay_signature: razorpay_signature,
//         razorpay_payment_id: razorpay_payment_id
//         // Add any other form fields here
//       });

//       // Save the form data to the database
//       const savedFormData = await formData.save();
//       console.log('Form data saved:', savedFormData);

//       resp.status(200).json({
//         success: true,
//         data: savedFormData,
//       });

//       // After saving the form data, you can initiate the payment here
//       // checkout(totalval);

//       // Redirect to your frontend page
//       // resp.redirect('http://localhost:3000/');
//     } else {
//       resp.status(400).json({
//         success: false,
//         error: 'Signature mismatch',
//       });
//     }
//   } catch (error) {
//     console.error('Error handling form data:', error);
//     resp.status(500).json({
//       success: false,
//       error: 'Error handling form data',
//     });
//   }
// });
app.post("/saveDataToDatabase", async (req, resp) => {
  try {
    // Save the form data to the database
    // The data sent from the frontend
    const { name, email, Town, Number, quantities, amount } = req.body;
    const formData = new form({
      name: name,
      email: email,
      Town: Town,
      Number: Number,
      quantities: quantities,
      amount: amount,
    });

    // Save the form data to the database
    const savedFormData = await formData.save();
    console.log("Form data saved:", savedFormData);
    // Implement code to save the formData to your database (e.g., using Mongoose for MongoDB)

    // Respond with a success message
    resp.status(200).json({
      success: true,
      message: "Data saved successfully",
    });
  } catch (error) {
    console.error("Error saving data:", error);
    resp.status(500).json({
      success: false,
      error: "Error saving data",
    });
  }
});

app.post("/saveDataToDatabase3", async (req, resp) => {
  try {
    // Save the form data to the database
    // The data sent from the frontend
    const { name, email, Town, Number, insta, amount } = req.body;
    const formData1 = new form1({
      name: name,
      email: email,
      Town: Town,
      Number: Number,
      Instagram: insta,
      amount: amount,
    });

    // Save the form data to the database
    const savedFormData1 = await formData1.save();
    console.log("Form data saved:", savedFormData1);
    // Implement code to save the formData to your database (e.g., using Mongoose for MongoDB)

    // Respond with a success message
    resp.status(200).json({
      success: true,
      message: "Data saved successfully",
    });
  } catch (error) {
    console.error("Error saving data:", error);
    resp.status(500).json({
      success: false,
      error: "Error saving data",
    });
  }
});

app.post("/Order3", async (req, resp) => {
  const option = {
    amount: Number(499 * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(option);
  console.log(order);
  resp.status(200).json({
    success: true,
    order,
  });
});

app.post("/Order4", async (req, resp) => {
  const option = {
    amount: Number(499 * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(option);
  console.log(order);
  resp.status(200).json({
    success: true,
    order,
  });
});

app.post("/saveDataToDatabase4", async (req, resp) => {
  try {
    // Save the form data to the database
    // The data sent from the frontend
    const {
      name,
      email,
      Town,
      Number,

      amount,
    } = req.body;
    const ModelResgistration = new form2({
      name: name,
      email: email,
      Town: Town,
      Number: Number,

      amount: amount,
    });

    // Save the form data to the database
    const savedFormData4 = await ModelResgistration.save();
    console.log("Form data saved:", savedFormData4);
    // Implement code to save the formData to your database (e.g., using Mongoose for MongoDB)

    // Respond with a success message
    resp.status(200).json({
      success: true,
      message: "Data saved successfully",
    });
  } catch (error) {
    console.error("Error saving data:", error);
    resp.status(500).json({
      success: false,
      error: "Error saving data",
    });
  }
});

app.post("/Order5", async (req, resp) => {
  const option = {
    amount: Number(799 * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(option);
  console.log(order);
  resp.status(200).json({
    success: true,
    order,
  });
});

app.post("/saveDataToDatabase5", async (req, resp) => {
  try {
    // Save the form data to the database
    // The data sent from the frontend
    const {
      name,
      email,
      Town,
      Number,

      amount,
    } = req.body;
    const Attendees = new form3({
      name: name,
      email: email,
      Town: Town,
      Number: Number,

      amount: amount,
    });

    // Save the form data to the database
    const savedFormData5 = await Attendees.save();
    console.log("Form data saved:", savedFormData5);
    // Implement code to save the formData to your database (e.g., using Mongoose for MongoDB)

    // Respond with a success message
    resp.status(200).json({
      success: true,
      message: "Data saved successfully",
    });
  } catch (error) {
    console.error("Error saving data:", error);
    resp.status(500).json({
      success: false,
      error: "Error saving data",
    });
  }
});

app.post("/Order6", async (req, resp) => {
  const option = {
    amount: Number(14999 * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(option);
  console.log(order);
  resp.status(200).json({
    success: true,
    order,
  });
});

app.post("/saveDataToDatabase6", async (req, resp) => {
  try {
    // Save the form data to the database
    // The data sent from the frontend
    const {
      name,
      email,
      Town,
      Number,

      amount,
    } = req.body;
    const fashionDesigner = new form3({
      name: name,
      email: email,
      Town: Town,
      Number: Number,
      Instagram: insta,
      amount: amount,
    });

    // Save the form data to the database
    const savedFormData6 = await fashionDesigner.save();
    console.log("Form data saved:", savedFormData6);
    // Implement code to save the formData to your database (e.g., using Mongoose for MongoDB)

    // Respond with a success message
    resp.status(200).json({
      success: true,
      message: "Data saved successfully",
    });
  } catch (error) {
    console.error("Error saving data:", error);
    resp.status(500).json({
      success: false,
      error: "Error saving data",
    });
  }
});

app.post("/fashionDesignerNew", createUser);
app.post("/createExperiencedDesigner", createExperiencedDesigner);
app.post("/createPlaceLogo", createPlaceLogo);

app.post("/Order7", async (req, resp) => {
  const option = {
    amount: Number(17700 * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(option);
  console.log(order);
  resp.status(200).json({
    success: true,
    order,
  });
});
app.post("/Order8", async (req, resp) => {
  const option = {
    amount: Number(17700 * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(option);
  console.log(order);
  resp.status(200).json({
    success: true,
    order,
  });
});
app.post("/Order9", async (req, resp) => {
  const option = {
    amount: Number(2000 * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(option);
  console.log(order);
  resp.status(200).json({
    success: true,
    order,
  });
});
