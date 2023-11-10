const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from router home");
});

router.route("/register").get((req, res) => {
  res.send("Hello register");
});

module.exports = router;
