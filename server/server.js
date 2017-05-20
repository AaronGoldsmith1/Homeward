const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const client = require('twilio')('AC5d6dabce4797b65a544edc775b8858bb', 'c0a502a6ef22603ce2c3d5cc18dba45f');
const dbController = require('./dbController');

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://student:ilovetesting@ds143201.mlab.com:43201/todewr');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(stormpath.init(app, {
  web: {
    produces: ['application/json']
  }
}));

app.on('stormpath.ready', function () {
  app.listen(3000, 'localhost', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://localhost:3000');
  });
});