const express = require("express");
const app = express();

app.use(express.json());

const students = [
  { id: 1, name: "Paco", age: 23, enroll: true },
  { id: 2, name: "Maria", age: 25, enroll: true },
  { id: 3, name: "Marcos", age: 30, enroll: true },
  { id: 4, name: "Alicia", age: 28, enroll: true },
];

//Home URL
app.get("/", (req, res) => {
  res.send("Node JS APP is working");
});

//Get all students
app.get("/api/students", (req, res) => {
  res.send(students);
});

//Get Student by id
app.get("/api/student/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(400).send("Student does not exist");
  else res.send(student);
});

//Create new Student
app.post("/api/students", (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name,
    age: parseInt(req.body.age),
    enroll: req.body.enroll === "true",
  };

  students.push(student);
  res.send(student);
});

//DELETE Student by id
app.delete("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student)
    return res
      .status(400)
      .send(`Student with id '${req.params.id}' does not exist`);

  const index = students.indexOf(student);
  students.splice(index, 1);
  res.send(student);
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Listening in ${port}`));
