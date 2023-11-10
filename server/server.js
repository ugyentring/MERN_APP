const express = require("express");
const app = express();
const router = require("./routes/auth-routes");

app.use("/api/auth", router);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
