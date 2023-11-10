
const home = async (req, res) => {
  try {
    await res.send("Hello from router home");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    await res.send("Hello register");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  home,
  register,
};
