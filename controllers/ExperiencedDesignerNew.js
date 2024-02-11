const ExperiencedDesignerNew = require("../model/ExperiencedDesignerNew");

// Function to create a new experienced designer
const createExperiencedDesigner = async (req, res) => {
  try {
    const newDesigner = await ExperiencedDesignerNew.create(req.body);
    res.status(201).json(newDesigner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to get all experienced designers
const getAllExperiencedDesigners = async (req, res) => {
  try {
    const designers = await ExperiencedDesignerNew.find();
    res.status(200).json(designers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a single experienced designer by ID
const getExperiencedDesignerById = async (req, res) => {
  try {
    const designer = await ExperiencedDesignerNew.findById(req.params.id);
    if (!designer) {
      return res.status(404).json({ message: "Designer not found" });
    }
    res.status(200).json(designer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update an existing experienced designer
const updateExperiencedDesigner = async (req, res) => {
  try {
    const updatedDesigner = await ExperiencedDesignerNew.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDesigner) {
      return res.status(404).json({ message: "Designer not found" });
    }
    res.status(200).json(updatedDesigner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to delete an experienced designer
const deleteExperiencedDesigner = async (req, res) => {
  try {
    const deletedDesigner = await ExperiencedDesignerNew.findByIdAndDelete(
      req.params.id
    );
    if (!deletedDesigner) {
      return res.status(404).json({ message: "Designer not found" });
    }
    res.status(200).json({ message: "Designer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createExperiencedDesigner,
  getAllExperiencedDesigners,
  getExperiencedDesignerById,
  updateExperiencedDesigner,
  deleteExperiencedDesigner,
};
