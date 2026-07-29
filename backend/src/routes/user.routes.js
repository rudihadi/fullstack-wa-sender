const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");
const { validateCreateUser } = require("../middlewares/validation.middleware");

router.get("/", userController.getAllUsers);

router.post("/", validateCreateUser, userController.createUser);

module.exports = router;
