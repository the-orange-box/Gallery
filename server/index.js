const express = require('express');
const imageController = require('./controllers/imageController.js');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../public')));
app.get('/gallery', imageController.getImages);

app.listen(port, ()=>{
  console.log('listening on port: ' + port);
});