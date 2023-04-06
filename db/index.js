const express = require("express");
const { connectToDb, getDb } = require("./db");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
};

const healthware = express();
healthware.use(express.json());
healthware.use(cors(corsOptions));
let db;

connectToDb((err) => {
  if (!err) {
    healthware.listen(3001, () => {
      console.log("App listening on port 3001");
    });
    db = getDb();
  }
});

// routes
healthware.get("/hospital", (req, res) => {
  let hospitals = [];

  db.collection("Hospital")
    .find()
    .sort({ name: 1 })
    .forEach((hospital) => hospitals.push(hospital))
    .then(() => {
      res.status(200).json(hospitals);
    })
    .catch(() => {
      res.status(500).json({ msg: "Error" });
    });
});

healthware.get("/patient", (req, res) => {
  let patients = [];

  db.collection("Patient")
    .find()
    .sort({ name: 1 })
    .forEach((patient) => patients.push(patient))
    .then(() => {
      res.status(200).json(patients);
    })
    .catch(() => {
      res.status(500).json({ msg: "Error" });
    });
});

healthware.get("/doctor", (req, res) => {
  let doctors = [];

  db.collection("Doctor")
    .find()
    .sort({ name: 1 })
    .forEach((doctor) => doctors.push(doctor))
    .then(() => {
      res.status(200).json(doctors);
    })
    .catch(() => {
      res.status(500).json({ msg: "Error" });
    });
});

// hospital signup
healthware.post("/signup/hospital", (req, res) => {
  const hospital = req.body;

  db.collection("Hospital")
    .insertOne(hospital)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create profile" });
    });
});

// patient signup
healthware.post("/signup/patient", (req, res) => {
  const hospital = req.body;

  db.collection("Patient")
    .insertOne(hospital)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create profile" });
    });
});

// doctor signup
healthware.post("/signup/doctor", (req, res) => {
  const hospital = req.body;

  db.collection("Doctor")
    .insertOne(hospital)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create profile" });
    });
});

// doc appointment
healthware.post("/p/appointments", (req, res) => {
  const appointment = req.body;

  db.collection("Appointments")
    .insertOne(appointment)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not book appointment" });
    });
});
