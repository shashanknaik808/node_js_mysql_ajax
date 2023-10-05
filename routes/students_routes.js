const express = require('express');

const { homePage,
    insertValues,
    getStudent,
    deleteStudents } = require('../controllers/students_controllers.js');

const studentRouter = express.Router();

studentRouter.get('/', homePage);
studentRouter.post('/', insertValues);
studentRouter.get('/student', getStudent);
studentRouter.get('/delete-student', deleteStudents);


module.exports = studentRouter;