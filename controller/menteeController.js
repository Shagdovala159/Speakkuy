// controller/menteeController.js
const Mentee = require('../models/mentee');

const menteeController = {};

menteeController.getAllMentee = (req, res) => {
  Mentee.getAll((err, mentees) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(mentees);
    }
  });
};

menteeController.getMenteeById = (req, res) => {
  const id = req.params.id;
  Mentee.getById(id, (err, mentee) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (mentee) {
      res.json(mentee);
    } else {
      res.status(404).json({ message: 'Mentee not found' });
    }
  });
};

menteeController.createMentee = (req, res) => {
  const data = req.body;
  Mentee.create(data, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Mentee created successfully' });
    }
  });
};

menteeController.updateMentee = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Mentee.update(id, data, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Mentee not found' });
    } else {
      res.json({ message: 'Mentee updated successfully' });
    }
  });
};

menteeController.deleteMentee = (req, res) => {
  const id = req.params.id;
  Mentee.delete(id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Mentee not found' });
    } else {
      res.json({ message: 'Mentee deleted successfully' });
    }
  });
};

module.exports = menteeController;
