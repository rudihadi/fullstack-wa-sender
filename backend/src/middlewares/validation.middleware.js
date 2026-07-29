// const validateCreateUser = (req, res, next) => {
//   // 1. Ambil data dari body request
//   const { name, email, password } = req.body;
//   const errors = [];

//   // 2. Validasi field Nama
//   if (!name || typeof name !== "string" || name.trim() === "") {
//     errors.push("Nama wajib diisi dan harus berupa teks.");
//   } else if (name.trim().length < 3) {
//     errors.push("Nama minimal harus 3 karakter.");
//   }

//   // 3. Validasi field Email
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!email) {
//     errors.push("Email wajib diisi.");
//   } else if (!emailRegex.test(email)) {
//     errors.push("Format email tidak valid.");
//   }

//   // 4. Validasi field Password
//   if (!password) {
//     errors.push("Password wajib diisi.");
//   } else if (password.length < 6) {
//     errors.push("Password minimal harus 6 karakter.");
//   }

//   // 5. Cek jika ada error
//   if (errors.length > 0) {
//     return res.status(400).json({
//       status: "fail",
//       messages: errors,
//     });
//   }

//   // 6. Lolos validasi, bersihkan data spasi (opsional)
//   req.body.name = name.trim();
//   req.body.email = email.toLowerCase().trim();

//   next();
// };

// module.exports = {
//   validateCreateUser,
// };

const validateCreateUser = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Nama wajib diisi.",
    });
  }

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email wajib diisi.",
    });
  }

  if (!password) {
    return res.status(400).json({
      success: false,
      message: "Password wajib diisi.",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password minimal harus 6 karakter.",
    });
  }

  next();
};

module.exports = {
  validateCreateUser,
};
