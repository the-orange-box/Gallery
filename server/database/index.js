var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallery', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('connection opened');
});

var gallerySchema = new mongoose.Schema({
  placeID: Number,
  image: String,
  caption: String,
  verified: Boolean
});

var galleryModel = mongoose.model('gallery', gallerySchema);

module.exports.database = db;
module.exports.gallerySchema = gallerySchema;
module.exports.galleryModel = galleryModel;