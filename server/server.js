require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/auth-routes");
const connectDB = require("./utils/db");

app.use(express.json());

app.use("/api/auth", router);

const port = 5000;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
