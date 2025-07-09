const express = require('express');
const multer = require('multer');
const path = require('path');
const verifyToken = require('../middleware/auth');
const Resource = require('../models/Resource'); // Make sure this model exists
const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + file.originalname;
    cb(null, unique);
  }
});
const upload = multer({ storage });

// Secure upload endpoint
router.post('/upload', verifyToken, upload.single('file'), async (req, res) => {
  try {
    const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    const newFile = await Resource.create({
      title: req.body.title,
      fileUrl,
      uploadedBy: req.user.id
    });
    res.json(newFile);
  } catch (err) {
    res.status(500).json({ message: 'File upload failed', error: err.message });
  }
});

module.exports = router;
