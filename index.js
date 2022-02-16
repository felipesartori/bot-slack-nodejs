require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

// create express app
const app = express();

// port express server
const PORT = process.env.APP_PORT;

// start server
app.listen(process.env.PORT || PORT, function () {
  console.log(`bot is listening on port: ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  var data = {
    form: {
      token: process.env.SLACK_AUTH_TOKEN,
      channel: "#general",
      text: "Hello! :wave: \n I'm your new bot."
    }
  };

  request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
    // sends welcome message
    res.json();
  });
});