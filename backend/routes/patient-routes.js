const express = require("express");
const router = express.Router();
const controller = require("../controllers/patient-controllers");

// const patientController = require("../controllers/patient-controllers");

//Post Method
router.post("/patients/add", controller.postPatients);

//Get all Method
router.get("/patients", controller.getAllPatients);

// Delete Patient
router.delete("/patients/:index", controller.deletePatients);

module.exports = router;
