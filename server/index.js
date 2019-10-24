const express = require('express');
const imageController = require('./controllers/imageController.js');
const app = express();
const path = require('path');
const port = 3001;
const cors = require('cors');

// app.use(cors());
// app.options('*', cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/:placeid', express.static(path.resolve(__dirname, '../public')));
app.get('/gallery', imageController.getImages);
app.get('/gallery/:placeid', imageController.getImage);
app.get('/*', (req, res, next)=>{
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, ()=>{
  console.log('listening on port: ' + port);
});