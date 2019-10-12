const db = require('./index.js');
const faker = require('faker');
const Promise = require('bluebird');

var seedDatabase = function (amount) {
  let imageData;
  var promises = [];

  for ( var i = 0; i < amount; i++) {
    imageData = generateRandomImage();
    promises.push(db.galleryModel.findOneAndUpdate({ placeID: imageData.placeID }, imageData, { new: true, upsert: true }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log('image inserted');
      }
    }));
  }
  Promise.all(promises).then((err, result)=>{
    if (err) {
      console.log(err);
    }
    db.database.close(() => {
      console.log('connection closed');
    });
  });
};

var generateRandomImage = function () {
  var randomImageURL = faker.image.imageUrl();
  var randomBoolean = faker.random.boolean();
  var randomID = faker.random.number();
  var randomText = faker.lorem.sentences();
  return {
    placeID: randomID,
    image: randomImageURL,
    caption: randomText,
    verified: randomBoolean
  };
};

seedDatabase(100);
