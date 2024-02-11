const FashionDesignerNew = require("../model/FashionDesignerNew");

// Function to create a new user
const createUser = async (req, res) => {
  try {
    // console.log(req.body);
    const newUser = await FashionDesignerNew.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    // console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// Function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await FashionDesignerNew.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await FashionDesignerNew.findById(req.params.userId);
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
    const updatedUser = await FashionDesignerNew.findByIdAndUpdate(
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
    const user = await FashionDesignerNew.findByIdAndDelete(req.params.userId);
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
