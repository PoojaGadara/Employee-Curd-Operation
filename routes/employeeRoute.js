const express = require('express');
const mongoose = require('mongoose');
const employeeController =require('../Controller/employeeController.js')
const router = express.Router();

//create Employee
router.post('/new/employee',employeeController.createEmployee)
//update Employee
router.put('/employee/:id',employeeController.updateEmployee)
//delete Employee
router.delete('/employee/:id',employeeController.deleteEmployee)
//list Employee
router.get('/employees',employeeController.ListEmployee)
//get Employee
router.get('/employee/:id',employeeController.getEmployeeDetails)


module.exports = router; 