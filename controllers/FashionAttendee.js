const FashionAttendee = require("../model/FashionAttendees");

// Controller function to create a new fashion attendee
const createFashionAttendee = async (req, res) => {
  try {
    const fashionAttendee = await FashionAttendee.create(req.body);
    res.status(201).json(fashionAttendee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to get all fashion attendees
const getAllFashionAttendees = async (req, res) => {
  try {
    const fashionAttendees = await FashionAttendee.find();
    res.status(200).json(fashionAttendees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get a single fashion attendee by ID
const getFashionAttendeeById = async (req, res) => {
  try {
    const fashionAttendee = await FashionAttendee.findById(req.params.id);
    if (!fashionAttendee) {
      return res.status(404).json({ error: "Fashion attendee not found" });
    }
    res.status(200).json(fashionAttendee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a fashion attendee by ID
const updateFashionAttendeeById = async (req, res) => {
  try {
    const fashionAttendee = await FashionAttendee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!fashionAttendee) {
      return res.status(404).json({ error: "Fashion attendee not found" });
    }
    res.status(200).json(fashionAttendee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete a fashion attendee by ID
const deleteFashionAttendeeById = async (req, res) => {
  try {
    const fashionAttendee = await FashionAttendee.findByIdAndDelete(
      req.params.id
    );
    if (!fashionAttendee) {
      return res.status(404).json({ error: "Fashion attendee not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createFashionAttendee,
  getAllFashionAttendees,
  getFashionAttendeeById,
  updateFashionAttendeeById,
  deleteFashionAttendeeById,
};
