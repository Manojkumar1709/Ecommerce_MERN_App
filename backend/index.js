const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const Stripe = require("stripe");

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const dbConnect = process.env.MONGODB_URL;

mongoose
  .connect(dbConnect, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const userScheme = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  img: String,
});

const userModel = mongoose.model("user", userScheme);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;
    const result = await userModel.findOne({ email: email }).exec();
    if (result) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const data = userModel(req.body);
      const savedData = await data.save();
      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userModel.findOne({
      email: email,
      password: password,
    });

    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        img: result.img,
      };
      res.send({
        message: "Login is successful",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "An error occurred during login",
      alert: false,
    });
  }
});

const schemeProduct = mongoose.Schema({
  name: String,
  category: String,
  img: String,
  price: String,
  description: String,
});

const productModel = mongoose.model("product", schemeProduct);

app.post("/uploadProduct", async (req, res) => {
  try {
    const data = await productModel(req.body);
    const datasave = await data.save();
    res.send({ message: "Upload successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred during upload" });
  }
});

app.get("/product", async (req, res) => {
  try {
    const data = await productModel.find({});
    res.send(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
app.post("/checkout-payment", async (req, res) => {
  try {
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [{ shipping_rate: "shr_1NhFVxSENpVc0yOYwKu9M7XL" }],
      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
            },
            unit_amount: (item.price = 100),
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.qty,
        };
      }),
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    };
    const session = await stripe.checkout.sessions.create(params);
    res.status(200).json(session.id);
  } catch (err) {
    res.send(err.statusCode || 500).json(err.message);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
