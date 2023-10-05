const express = require('express');

const { homePage } = require('../controllers/students_controllers.js');

const studentRouter = express.Router();

studentRouter.get('/', homePage);


module.exports = studentRouter;