const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.send("Hello from router home");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const userCreated = await User.create({ username, email, phone, password });
    res.status(200).json({ userCreated });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  home,
  register,
};
