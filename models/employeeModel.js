const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({

    firstName: {
        type:String,
        required : [true , 'Enter First Name']
    },
    lastName:{
        type:String,
        required : [true , 'Enter Last Name']
    },
    birthDate:{
        type:String,
        required : [true , 'Enter Birth Date Name']
    },
    contactNo:[{
        type: Number,
        required : [true , 'Enter Contact Number']
    }],
    email: [{
        type: String,
       required : [true , 'Enter Email Address']
    }],
    address: {
        street: {
            type: String
        },
        houseNo: {
            type: String
        },
        city:{
            type: String
        }
    },
    salary: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    deletedAt: {
        type: Date,
        default: Date.now()
    }
});
const employeeModel = new mongoose.model("employee", employeeSchema)

module.exports = employeeModel;