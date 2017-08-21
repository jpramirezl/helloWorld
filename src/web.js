const express = require('express')
const app = express()
var exports = module.exports = {};

app.get('/', function (req, res) {
  res.send('Hola Mundo')
})

app.get('/name', function (req, res) {
  res.send('mis amigas')
})

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})

exports.closeServer = function(){
  server.close();
};
