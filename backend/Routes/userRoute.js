const express = require("express");
const {
  createUser,
  getUsers,
  deleteUser,
} = require("../Controllers/userController");

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);

module.exports = router;
