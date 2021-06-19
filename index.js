const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
  // console.log(req.body.crypto);
  //request("https://api.coindesk.com/v1/bpi/currentprice/usd", function(erroe, response, body){
  //console.log(body);

  var crypto = req.body.crypto;
  var fait = req.body.fait;
  var baseUrl = 'https://api.coindesk.com/v1/bpi/currentprice/';
  var finalUrl = baseUrl + fait;
  request(finalUrl, function(error, response, body) {
    var data = JSON.parse(body);
    var price = data.bpi.fait.rate;

    res.send('<h1>The Current price of bitcoin' + price + ' USD </h1>');
  });
});
app.listen(3000, function() {
  console.log('server is running on port 3000');
});
