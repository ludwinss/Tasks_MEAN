const express = require('express');

const route = express.Router();

const employeeController =require('../controllers/employees.controller');

route.get('/',employeeController.getEmployees)

module.exports=route;