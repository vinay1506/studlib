const express = require('express');
const multer = require('multer');
const path = require('path');
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

router.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).json({ filePath: req.file.filename });
});

module.exports = router;
