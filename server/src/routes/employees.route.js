const express = require("express");

const route = express.Router();

const employeeController = require("../controllers/employees.controller");

route.get("/", employeeController.getEmployees);
route.get("/:_id", employeeController.getEmployee);
route.post("/", employeeController.createEmployee);
route.put("/:_id", employeeController.editEmployee);
route.delete("/:_id", employeeController.deleteEmployee);

module.exports = route;
