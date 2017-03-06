var express = require("express"),
    bodyParser = require("body-parser"),
    favicon = require("serve-favicon"),
    path = require("path"),//自带模块
    fs = require("fs"), //自带模块
    url = require("url"),//自带模块
    nodemailer = require('nodemailer');//nodemailer模块

var credentials = require('./credentials');

var app = express();
app.set("port", process.env.PORT || 3020);

// database configuration
var mongoose = require('mongoose');
var options = {
    server: {
        socketOptions: {keepAlive: 1}
    }
};
switch (app.get('env')) {
    case 'development':
        mongoose.connect(credentials.mongo.development.connectionString, options);
        break;
    case 'production':
        mongoose.connect(credentials.mongo.production.connectionString, options);
        break;
    default:
        throw new Error('Unknown execution environment: ' + app.get('env'));
}


//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//cookieparser
app.use(require('cookie-parser')(credentials.cookieSecret));
//express-session
app.use(require('express-session')({
    secret: credentials.cookieSecret,
    resave: false,
    saveUninitialized: true
}));
//静态资源
app.use(express.static(__dirname + '/public'));

//网站缩略图
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

var routes = require('./routes/routes');

app.use('/',routes);



app.listen(app.get("port"), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});