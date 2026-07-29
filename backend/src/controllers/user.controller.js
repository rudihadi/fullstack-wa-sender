const userService = require("../services/user.service");

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();

  res.json({
    success: true,
    data: users,
  });
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.createUser({ name, email, password });

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(409).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
