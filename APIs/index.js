const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());

app.listen(2400,()=>console.log('Server started at port : 2400'));

app.use('/employees',employeeController);