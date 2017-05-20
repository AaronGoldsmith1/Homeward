const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sessionController = require('./session/sessionController');
const cookieController = require('./util/cookieController');
const chronJobController = require('./utils/chronJobController')

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://student:ilovetesting@ds143201.mlab.com:43201/todewr');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.static(path.join(__dirname, './../node_modules/')));
app.use(express.static(path.join(__dirname, './../client/')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// Unauthorized routes
app.get('/login', )
app.get('/register', )


// request from client to Register User
app.post('/register', /* CreateUser */, cookieController.setSSIDCookie, sessionController.startSession);


/*
*   Authorizer route
*/
// request from client to Login
app.post('/login', /* VerifyUser */, cookieController.setSSIDCookie, sessionController.startSession);


/**
* Authorized routes
*/
// request from client to Logout
app.post('/logout', sessionController.isLoggedIn, cookieController.removeSSIDCookie, sessionController.stopSession);


// sessionController.isLoggedIn (middleware to check if the user is logged in)
// to be called before all "Authorized" routes get and post requests



/*
* 404 - Page Not Found handler
*/
app.get('/*', function(req,res) {
  res.statusCode = 404;
  // TODO: Change how we choose to send the user to the page
  // res.render(__dirname + '/../views/pageNotFound.ejs', {});
});


app.listen(PORT, () => {
  console.log('Listening on port 3000');
});

chronJobController.scheduleJob();