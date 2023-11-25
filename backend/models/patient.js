const mongoose = require("mongoose");

// Define the patient schema
const patientSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  name: { type: String, required: false },
  description: { type: String, required: false },
});

module.exports = mongoose.model("Patient", patientSchema);
