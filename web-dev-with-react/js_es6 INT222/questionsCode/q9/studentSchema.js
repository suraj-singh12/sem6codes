const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  SID: String,
  name: String,
  subject: String,
  branch: String,
  marks: Number,
});
module.exports = studentSchema;