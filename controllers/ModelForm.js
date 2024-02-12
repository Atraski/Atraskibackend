const ModelForm = require("../model/ModelForm");

// Controller function to create a new model form entry
const createModelForm = async (req, res) => {
  try {
    const modelForm = await ModelForm.create(req.body);
    res.status(201).json(modelForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to get all model form entries
const getAllModelForms = async (req, res) => {
  try {
    const modelForms = await ModelForm.find();
    res.status(200).json(modelForms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get a single model form entry by ID
const getModelFormById = async (req, res) => {
  try {
    const modelForm = await ModelForm.findById(req.params.id);
    if (!modelForm) {
      return res.status(404).json({ error: "Model form entry not found" });
    }
    res.status(200).json(modelForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a model form entry by ID
const updateModelFormById = async (req, res) => {
  try {
    const modelForm = await ModelForm.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!modelForm) {
      return res.status(404).json({ error: "Model form entry not found" });
    }
    res.status(200).json(modelForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete a model form entry by ID
const deleteModelFormById = async (req, res) => {
  try {
    const modelForm = await ModelForm.findByIdAndDelete(req.params.id);
    if (!modelForm) {
      return res.status(404).json({ error: "Model form entry not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createModelForm,
  getAllModelForms,
  getModelFormById,
  updateModelFormById,
  deleteModelFormById,
};
