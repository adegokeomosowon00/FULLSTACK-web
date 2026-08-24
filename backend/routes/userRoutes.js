const express = require("express");
const {
  createUser,
  getUsers,
  getUsersById,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controller/usercontroller");
const { verify } = require("jsonwebtoken");
const { vertifyUser, vertifyToken } = require("../middleware/veifyToken");
const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/", vertifyToken, getUsers);
router.get("/:id", vertifyToken, getUsersById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
