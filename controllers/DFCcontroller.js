const DFC = require("../model/DFCregistration");

// Function to create a new user
const createUser = async (req, res) => {
  try {
    const newUser = await DFC.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await DFC.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await DFC.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to update a user by ID
const updateUserById = async (req, res) => {
  try {
    const updatedUser = await DFC.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to delete a user by ID
const deleteUserById = async (req, res) => {
  try {
    const user = await DFC.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
