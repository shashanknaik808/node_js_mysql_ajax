const mysql = require('mysql');
const ejs = require('ejs');
const express = require('express');
const studentRouter = require('./routes/students_routes.js');
const connection = require('./model/connection.js');


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', studentRouter);



connection.connect(err => {
    if (err) console.log("There is an error while connecting" + err);

    app.listen(4000);

    console.log("DB Connected" + connection.threadId);
    console.log("Server started at port 4000");

});