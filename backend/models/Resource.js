const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: String,
  description: String,
  filePath: String,
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resource', resourceSchema);
