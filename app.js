const express = require('express')
const app = express();
const errmiddleware = require('./middleware/error')
app.use(express.json())
//route imports
const employee = require('./routes/employeeRoute')

app.use('/api/v1', employee)

//middleware for error
app.use(errmiddleware)


module.exports = app;