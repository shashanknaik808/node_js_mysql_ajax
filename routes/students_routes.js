const express = require('express');

const { homePage,
    insertValues,
    getStudent,
    deleteStudents,
    updateStudents,
    updateStudentsDetails, 
    searchStudents} = require('../controllers/students_controllers.js');

const studentRouter = express.Router();

studentRouter.get('/', homePage);
studentRouter.post('/', insertValues);
studentRouter.get('/student', getStudent);
studentRouter.get('/delete-student', deleteStudents);
studentRouter.get('/update-student', updateStudents);
studentRouter.post('/update-student', updateStudentsDetails);
studentRouter.get('/search-students', searchStudents);



module.exports = studentRouter;