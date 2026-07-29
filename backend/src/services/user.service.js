const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const AppError = require("../utils/AppError");

const getAllUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

// const createUser = async ({ name, email, password }) => {
//   const emailExists = await prisma.user.findUnique({
//     where: {
//       email: email,
//     },
//   });

//   if (emailExists) {
//     const error = new Error("Email sudah terdaftar.");
//     error.statusCode = 400;
//     throw error;
//     // throw new Error("Email sudah digunakan");
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);
//   return await prisma.user.create({
//     data: {
//       name,
//       email,
//       password: hashedPassword,
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//       isActive: true,
//       createdAt: true,
//     },
//   });
// };

const createUser = async ({ name, email, password }) => {
  const emailExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (emailExists) {
    // throw new Error("Email sudah digunakan");
    throw new AppError("Email sudah digunakan", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
    },
  });
};

module.exports = {
  getAllUsers,
  createUser,
};
