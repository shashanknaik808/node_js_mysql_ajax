const mysql = require('mysql');
const express = require('express');
const connection = require('../model/connection.js');

module.exports.homePage = (req, res) => {
    res.sendFile(__dirname + '/register.html');
};