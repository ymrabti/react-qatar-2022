const express = require('express')
var https = require('follow-redirects').https;
var dotenv = require('dotenv').config()
const { TOKEN } = dotenv.parsed
console.log(`TOKEN ${TOKEN}`);
const app = express()
const port = 4000



app.get('/api/standings', (req, res) => {
  var options = {
    'method': 'GET',
    'hostname': 'api.football-data.org',
    'path': '/v4/competitions/2000/standings',
    'headers': {
      'X-Auth-Token': TOKEN
    },
    'maxRedirects': 20
  };

  var request = https.request(options, function (result) {
    var chunks = [];

    result.on("data", function (chunk) {
      chunks.push(chunk);
    });

    result.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      // console.log(body.toString());
      res.json(JSON.parse(body.toString()))
    });

    result.on("error", function (error) {
      console.error(error);
    });
  });
  request.end();
  
})


app.get('/api/matches', (req, res) => {
  var options = {
    'method': 'GET',
    'hostname': 'api.football-data.org',
    'path': '/v4/competitions/2000/matches',
    'headers': {
      'X-Auth-Token': TOKEN
    },
    'maxRedirects': 20
  };

  var request = https.request(options, function (result) {
    var chunks = [];

    result.on("data", function (chunk) {
      chunks.push(chunk);
    });

    result.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      // console.log(body.toString());
      res.json(JSON.parse(body.toString()))
    });

    result.on("error", function (error) {
      console.error(error);
    });
  });
  request.end();
})

app.listen(port, () => console.log(`Example backend API listening on port ${port}!`))
