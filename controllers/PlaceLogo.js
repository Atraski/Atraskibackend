const PlaceLogo = require("../model/PlaceLogo"); // Import your Mongoose model

// Function to create a new place logo
const createPlaceLogo = async (req, res) => {
  try {
    const newPlaceLogo = await PlaceLogo.create(req.body);
    res.status(201).json(newPlaceLogo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to get all place logos
const getAllPlaceLogos = async (req, res) => {
  try {
    const placeLogos = await PlaceLogo.find();
    res.status(200).json(placeLogos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a single place logo by ID
const getPlaceLogoById = async (req, res) => {
  try {
    const placeLogo = await PlaceLogo.findById(req.params.id);
    if (!placeLogo) {
      return res.status(404).json({ message: "Place logo not found" });
    }
    res.status(200).json(placeLogo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update an existing place logo
const updatePlaceLogo = async (req, res) => {
  try {
    const updatedPlaceLogo = await PlaceLogo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPlaceLogo) {
      return res.status(404).json({ message: "Place logo not found" });
    }
    res.status(200).json(updatedPlaceLogo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to delete a place logo
const deletePlaceLogo = async (req, res) => {
  try {
    const deletedPlaceLogo = await PlaceLogo.findByIdAndDelete(req.params.id);
    if (!deletedPlaceLogo) {
      return res.status(404).json({ message: "Place logo not found" });
    }
    res.status(200).json({ message: "Place logo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPlaceLogo,
  getAllPlaceLogos,
  getPlaceLogoById,
  updatePlaceLogo,
  deletePlaceLogo,
};
