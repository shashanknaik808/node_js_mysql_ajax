const mysql = require('mysql');
const express = require('express');
const connection = require('../model/connection.js');

module.exports.homePage = (req, res) => {
    res.sendFile(__dirname + '/register.html');
};


module.exports.insertValues = (req, res) => {
    console.log(req.body);


    const { name, email, mobile } = req.body;

    let sql_query = `INSERT INTO STUDENTS (NAME, EMAIL, MOBILE) VALUES ?;`;

    let values = [
        [name, email, mobile]
    ];

    connection.query(sql_query, [values], (err, result) => {
        if (err) return console.log("Error while inserted data " + err);
        res.send("Data inserted successfull");


    });


}

module.exports.getStudent = (req, res) => {

    let sql = "SELECT * FROM STUDENTS";

    connection.query(sql, (err, result) => {
        if (err) return console.log(err);
        res.render("student", { student: result });

    });

};


module.exports.deleteStudents = (req, res) => {
    let sql = "DELETE FROM STUDENTS WHERE ID=?";
    let id = req.query.id;
    connection.query(sql, [id], (err, result) => {

        if (err) return console.log(err);
        res.send("Student record deleted");

    });
};

module.exports.updateStudents = (req, res) => {
    let id = req.query.id;
    let sql = "SELECT * FROM STUDENTS WHERE ID=?";
    connection.query(sql, [id], (err, result) => {

        if (err) return console.log(err);
        res.render("update-student", { student: result });

    });
};

