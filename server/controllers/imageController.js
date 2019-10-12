let model = require('../models/imageModel.js');

module.exports = {
  getImages: function(req, res, next) {
    console.log('getImages controller')
    model.getAll((err, result)=>{
      if(err) console.log(err);
      else res.send(result);
    });
  }
}