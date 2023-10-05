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