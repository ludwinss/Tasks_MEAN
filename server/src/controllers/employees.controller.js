const Employee = require("../models/employees.model");

module.exports = {
  getEmployees: async (req, res) => {
    try {
      let eplFound = await Employee.find();
      if (eplFound.length > 0) {
        return res.status(200).send(eplFound);
      }
      return res.status(404).send({ message: "Don't found" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  },
  getEmployee: async (req, res) => {
    try {
      let eplFound = await Employee.findOne(req.params);
      if (eplFound) {
        return res.status(200).send(eplFound);
      }
      return res.status(404).send({ message: "Don't found" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  },
  createEmployee: async (req, res) => {
    try {
      let { name, position, office, salary } = req.body;
      const employee = new Employee({ name, position, office, salary });
      await employee.save();
      res.json({ message: "Employee create" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  },
  editEmployee: async (req, res) => {
    try {
      let newEmployee = await Employee.findOneAndUpdate(
        req.params,
        { $set: req.body },
        { new: true }
      );
      if (newEmployee) {
        return res.json(newEmployee);
      }
      return res.status(400).json({ message: "Bad Request" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  },
  deleteEmployee: async (req, res) => {
    try {
      let isDone = await Employee.findOneAndRemove(req.params);
      if (isDone) {
        return res.json({ message: "It's done" });
      }
      return res.status(400).json({ message: "Bad Request" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  },
};
