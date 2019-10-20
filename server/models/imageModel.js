const mongoose = require('mongoose');
const db = require('../database/index.js');

module.exports = {
  getAll: function(callback) {
    console.log('getAll Model');
    db.galleryModel.find({}).exec(callback);
  },
  getByPlace: function(params, callback) {
    console.log('get image by placeid');
    db.galleryModel.find({placeID: params}).exec(callback);
  },
  put: function() {

  },
  update: function() {

  },
  delete: function() {

  }
};
db.galleryModel

