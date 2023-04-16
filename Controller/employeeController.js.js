const employeeModel = require('../models/employeeModel')
const Errorhandler = require('../utills/errorHandler')
const catchAsyceError = require('../middleware/catchAsyncError')

//create Employee
exports.createEmployee = catchAsyceError(async (req, res) => {

    const employee = await employeeModel.create(req.body);
    console.log(req.body)
    console.log(employee)
    employee.save();
    return res.status(201).json({
        success: true,
        data: employee
    })
});


//Get All Employee
exports.ListEmployee = catchAsyceError(async (req, res) => {

    var resultPerPage = 1;
    var page = req.params.page;
    var skip = resultPerPage * page

    const employee = await employeeModel.find({}).limit(resultPerPage).skip(skip)
    res.status(200).json({
        success: true,
        employee
    })
})

// Get Employee Details
exports.getEmployeeDetails = catchAsyceError(async (req, res, next) => {
    const employee = await employeeModel.findById(req.params.id)

    if (!employee) {
        return next(new Errorhandler("Employee Not Found", 404))
    }

    res.status(200).json({
        success: true,
        employee
    })
});

//Update Employee

exports.updateEmployee = catchAsyceError(async (req, res, next) => {

    let employee = await employeeModel.findById(req.params.id)

    employee = await employeeModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        data: employee
    })

    if (!employee) {
        return next(new Errorhandler("Employee Not Found", 404))
    }
});


//Delete Employee

exports.deleteEmployee = catchAsyceError(async (req, res, next) => {

    const Employee = await employeeModel.findByIdAndDelete(req.params.id)

    if (!Employee) {
        return next(new Errorhandler("Employee Not Found", 404))
    }
    // await Employee.destroy()

    res.status(200).json({
        success: true,
        message: 'Employee deleted Succesfully'
    })
});

