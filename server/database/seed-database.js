const db = require('./index.js');
var faker = require('faker');

var seedDatabase = function (amount) {
  var imageData = generateRandomImage();
  // var image = new db.galleryModel(imageData);
  // console.log(imageData);
  amount
  db.galleryModel.findOneAndUpdate({ placeID: imageData.placeID }, imageData, { new: true, upsert: true }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
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

seedDatabase();
