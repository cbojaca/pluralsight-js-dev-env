import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
/* eslint-disable no-debugger */

const port = 3005;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
  res.json([
    {"id":1, "name": "Bob", "lastName": "Shop", "email": "bobs@gmail.com"},
    {"id":2, "name": "Carl", "lastName": "Tens", "email": "carlt@gmail.com"},
    {"id":3, "name": "fred", "lastName": "Pose", "email": "fredp1@gmail.com"},
  ])
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
