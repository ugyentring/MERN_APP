const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://127.0.0.1:27017/thapa";

// const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("connection successful");
  } catch (error) {
    console.error("Database connection failed");
  }
};

module.exports = connectDB;
