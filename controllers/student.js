const Students = require("../models/student");

module.exports = {
  getAllStudents: async (req, res) => {
    try {
      const students = await Students.findAll();
      res.status(200).send({ students: students });
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
  createStudent: async (req, res) => {
    try {
      const { name, email, address, phone_number } = req.body;
      const student = await Students.create({
        name: name,
        email: email,
        address: address,
        phone_number: phone_number,
      });
      res.status(200).send({
        student: student
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
  getStudent: async (req, res) => {
    try {
      const studentId = Number(req.params.studentId);
      if(isNaN(studentId)) {
        return res.status(400).send("Invalid student id");
      }
      const student = await Students.findOne({
        where: {
          id: studentId
        }
      });
      res.status(200).send({ student: student });
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
  update: async (req, res) => {
    try {
      const {name} = req.body;
      const studentId = Number(req.params.studentId);
      if(isNaN(studentId)) {
        return res.status(400).send("Invalid student id");
      }
      const student = await Students.update({
        name: name
      }, {
        where: {
          id: studentId
        }
      });
      res.status(200).send({ student: student });
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
}





// Node <=> MySQL2 driver <=> MySQL
// Node <=> ORM <=> MySQL2 driver <=> MySQL