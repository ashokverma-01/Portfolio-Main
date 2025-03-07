const User = require("../Models/userModel");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, comment } = req.body;
    const user = new User({ name, email, comment });
    await user.save();
    res.status(201).json({ message: "Commit successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating commit", error });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
