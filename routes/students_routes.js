const express = require('express');

const { homePage, insertValues, getStudent } = require('../controllers/students_controllers.js');

const studentRouter = express.Router();

studentRouter.get('/', homePage);
studentRouter.post('/', insertValues);
studentRouter.get('/student', getStudent);


module.exports = studentRouter;