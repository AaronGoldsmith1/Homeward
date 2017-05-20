const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const client = require('twilio')('AC5d6dabce4797b65a544edc775b8858bb', 'c0a502a6ef22603ce2c3d5cc18dba45f');
const userController = require('./user/userController');

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://homeward:homeward1234@ds037827.mlab.com:37827/homeward');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


app.use(express.static(path.join(__dirname, './../client/')));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(bodyParser())
app.post('/createuser', userController.createUser)
app.post('/createquery', userController.createQuery)//, add twilio middleware here to text query list
// app.post("/sms", dbController.ParseText)
// app.get('/getsms', dbController.getList)

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});