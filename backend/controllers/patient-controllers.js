const Model = require("../models/patient");

exports.getAllPatients = async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePatients = async (req, res) => {
  const { index } = req.params;
  try {
    const patientData = await Model.find(); // Fetch all patient data from the database
    if (index >= 0 && index < patientData.length) {
      const deletedPatient = patientData.splice(index, 1)[0]; // Remove the patient at the given index
      await Model.deleteOne({ id: deletedPatient.id }); // Delete the patient from the database
      res.status(200).json({ message: "Patient deleted successfully." });
    } else {
      res.status(404).json({ message: "Patient not found." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postPatients = async (req, res) => {
  const data = [
    {
      id: 1,
      name: "Agney",
      description: "Nothing 1",
    },
    {
      id: 2,
      name: "Prathamesh",
      description: "Nothing 2",
    },
    {
      id: 3,
      name: "Rahul",
      description: "Nothing 3",
    },
    {
      id: 4,
      name: "Shubham",
      description: "Nothing 4",
    },
  ];

  try {
    const dataToSave = await Model.insertMany(data);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
