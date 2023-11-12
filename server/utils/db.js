const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://tsheringugyen483:thapa123@cluster0.kqadtvy.mongodb.net/thapa";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("connection successful");
  } catch (error) {
    console.error("Database connection failed");
  }
};

module.exports = connectDB;
