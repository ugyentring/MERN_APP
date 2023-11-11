const home = async (req, res) => {
  try {
    await res.send("Hello from router home");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    await res.json({ message: req.body });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  home,
  register,
};
