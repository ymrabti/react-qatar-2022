const express = require('express')
var https = require('follow-redirects').https;
var dotenv = require('dotenv').config()
const { TOKEN } = dotenv.parsed
console.log(`TOKEN ${TOKEN}`);
const app = express()
const port = 4000
const path = require('path');
const public_path = path.resolve('build');
console.log(public_path);

const ContentSecurityPolicyMiddleWare = (req, res, next) => {
  res.set("Content-Security-Policy", "default-src 'self'; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval' http://localhost:6842; img-src * 'self' data: ;font-src * ;connect-src *;");
  next();
};
app.use(express.static(public_path));
// app.use(favicon(resolve('public', 'skin', 'logo.png')));

app.get('/api/standings', ContentSecurityPolicyMiddleWare, (_req, res) => {
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


app.get('/api/matches', (_req, res) => {
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

app.get('/', ContentSecurityPolicyMiddleWare, (_req, res) => {
  res.sendFile(path.resolve("build", "index.html"));
});


app.listen(port, () => console.log(`Example backend API listening on port ${port}!`))
