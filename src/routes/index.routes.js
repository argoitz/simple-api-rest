const { Router } = require("express");
const router = Router();
const studentModel = require("../models/student-model");

//TODO: MOVE TO SEED
const students = [
  { id: 1, name: "Paco", age: 23, enroll: true },
  { id: 2, name: "Maria", age: 25, enroll: true },
  { id: 3, name: "Marcos", age: 30, enroll: true },
  { id: 4, name: "Alicia", age: 28, enroll: true },
];

//Home URL
router.get("/", (req, res) => {
  return res.json({
    error: null,
    data: "Node JS APP is working",
  });
});

//Get all students
router.get("/students", async (req, res) => {
  try {
    const students = await studentModel.find({});
    return res.json({
      error: null,
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

//Get Student by id
router.get("/student/:id", async (req, res) => {
  try {
    const student = await studentModel.find({ _id: req.params.id });
    return res.json({
      error: null,
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

//Create new Student
router.post("/students", async (req, res) => {
  const studentM = new studentModel(req.body);

  try {
    await studentM.save();
    return res.json({
      error: null,
      data: { message: "Student saved", student: studentM },
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

// //UPDATE Student by id
//TODO: return new user
router.put("/students/:id", async (req, res) => {
  // const studentM = new studentModel(req.body);
  try {
    await studentModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    return res.json({
      error: null,
      data: { message: "User updated", user: req.body },
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

//DELETE Student by id
router.delete("/students/:id", async (req, res) => {
  studentModel.findByIdAndRemove(req.params.id, (error, student) => {
    if (!error) {
      if (!student)
        return res.status(404).json({
          error: error,
          data: { message: "Student not found" },
        });
      else
        res.json({
          error: null,
          data: { message: "Student Removed", student: student },
        });
    } else {
      return res.status(500).json({
        error: error,
      });
    }
  });
});

module.exports = router;
