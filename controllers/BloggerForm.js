// Controller function to create a new model form entry
const BloggerForm = require("../model/BloggerForm");

const createBloggerForm = async (req, res) => {
  try {
    const modelForm = await BloggerForm.create(req.body);
    res.status(201).json(modelForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBloggerForm };
