const { Router } = require("express");
const router = Router();
const studentModel = require("../models/studentsModel");

const students = [
  { id: 1, name: "Paco", age: 23, enroll: true },
  { id: 2, name: "Maria", age: 25, enroll: true },
  { id: 3, name: "Marcos", age: 30, enroll: true },
  { id: 4, name: "Alicia", age: 28, enroll: true },
];

//Home URL
router.get("/", (req, res) => {
  res.send("Node JS APP is working");
});

//Get all students
router.get("/api/students", async (req, res) => {
  try {
    const students = await studentModel.find({});
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Get Student by id
router.get("/api/student/:id", async (req, res) => {
  try {
    const student = await studentModel.find({ _id: req.params.id });
    res.send(student);
  } catch (error) {
    return res.status(500).send(err);
  }
});

//Create new Student
router.post("/api/students", async (req, res) => {
  const studentM = new studentModel(req.body);

  try {
    await studentM.save();
    return res.send({ message: "Student saved", student: studentM });
  } catch (error) {
    return res.status(500).send(error);
  }
});

// //UPDATE Student by id
//TODO: return new user
//TODO: Catch error if extra fields
router.put("/api/students/:id", async (req, res) => {
  const studentM = new studentModel(req.body);

  try {
    await studentModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: studentM }
    );
    res.send({ message: "User updated" });
  } catch (error) {
    return res.status(500).send(error);
  }
});

//DELETE Student by id
router.delete("/api/students/:id", async (req, res) => {
  studentModel.findByIdAndRemove(req.params.id, (err, student) => {
    if (!err) {
      if (!student) res.send({ message: "Student not found" });
      else res.send({ message: "Student Removed", student: student });
    } else {
      res.status(500).send(err);
    }
  });
});

module.exports = router;
