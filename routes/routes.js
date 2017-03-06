var express = require("express"),
    router = express.Router(),
    crypto = require('crypto'), //自带
    mongoose = require('mongoose'),
    formidable = require('formidable'),
    fs = require('fs');

var student_m = require('../models/student'),
    credentials = require('../credentials');

// router.get('/',function (req,res,next) {
//     new student_m({studentID:'lily',password:'123456',email:'haha.com'}).save();
//     res.render('test');
// });





module.exports = router;