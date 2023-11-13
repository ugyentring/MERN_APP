const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://tsheringugyen483:thapa123@cluster0.kqadtvy.mongodb.net/thapa";

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful");
  } catch (error) {
    console.error("Database connection failed");
  }
};

module.exports = connectDB;
