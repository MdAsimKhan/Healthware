const express = require("express");
const { connectToDb, getDb } = require("./db");

const healthware = express();
healthware.use(express.json());
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

healthware.get("/patient", (req, res) => {
  res.json({ msg: "Patient" });
});

healthware.get("/doctor", (req, res) => {
  res.json({ msg: "Dcotor" });
});
