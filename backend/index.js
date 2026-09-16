require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);

app.use(bodyParser.json());

const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");
const { Signup, Login } = require("./AuthController");

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create order",
    });
  }
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.send(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.send(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrderModel.find({});
  res.send(allOrders);
});

app.post("/signup", Signup);
app.post("/login", Login);

app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
