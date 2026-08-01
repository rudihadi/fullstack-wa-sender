const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const AppError = require("../utils/AppError");
const { generateToken } = require("../utils/jwt");

const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  const isMatch = await bcrypt.compare(password, user.password);

  if (!user || !isMatch) {
    throw new AppError("Email atau password salah", 401);
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

module.exports = {
  login,
};
