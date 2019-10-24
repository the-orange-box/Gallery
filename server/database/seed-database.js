const db = require('./index.js');
const faker = require('faker');
const s3 = require('./aws-s3.js');
const Promise = require('bluebird');

var seedDatabase = function (urls) {
  let imageData;
  var promises = [];

  for ( var i = 1; i <= 600; i++) {
    // generate random image objects from input url array and listing ids
    imageData = generateRandomImage(i % 100, urls[i % urls.length]);
    // find and update image objects based on image link url; todo: update search criteria
    promises.push(db.galleryModel.findOneAndUpdate(imageData, imageData, { new: true, upsert: true }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('image inserted');
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

var generateRandomImage = function (id, url) {
  var randomImageURL = url;
  var randomBoolean = faker.random.boolean();
  var randomID = id;
  var randomText = faker.lorem.sentences();

  return {
    placeID: randomID,
    image: randomImageURL,
    caption: randomText,
    verified: randomBoolean
  };
};

const bucketname = "hrsf123-airbnb-clone";
const bucketregion = "s3-us-west-1";

let listObjectsParams = {
  Bucket: bucketname
  // MaxKeys: 2
};

let awsimageurls = [
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/country-house-540796_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/architecture-1836070_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/architecture-3076685_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/beach-caribbean-coast.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/boat-house-192990_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/coast-4478424_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/country-house-540796_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/hut-1626354_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/large-home-389271_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/log-cabin-1886620_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/nature-1547302_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/sydney-363244_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/villa-3237114_1280.jpg',
  'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/witchs-house-1635770_1280.jpg'
];

seedDatabase(awsimageurls);

// s3.listObjects(listObjectsParams, function (err, data) {
//   if (err) {
//     console.log(err, err.stack);
//   } else {
//     var url = `https://${bucketname}.${bucketregion}.amazonaws.com/`;
//     var resultarr = [];
//     data.Contents.forEach((item)=>{
//       resultarr.push(url + item.Key);
//     });
//     seedDatabase(resultarr);
//   }
// });
