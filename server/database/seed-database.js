const db = require('./index.js');
const faker = require('faker');
const s3 = require('./aws-s3.js');
const Promise = require('bluebird');

var seedDatabase = function (urls) {
  let imageData;
  var promises = [];

  for ( var i = 0; i < urls.length; i++) {
    // generate random image objects from input url array and listing ids
    imageData = generateRandomImage(i % 2, urls[i]);
    // find and update image objects based on image link url; todo: update search criteria
    promises.push(db.galleryModel.findOneAndUpdate({image: imageData.image}, imageData, { new: true, upsert: true }, (err, result) => {
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

s3.listObjects(listObjectsParams, function (err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    var url = `https://${bucketname}.${bucketregion}.amazonaws.com/`;
    var resultarr = [];
    data.Contents.forEach((item)=>{
      resultarr.push(url + item.Key);
    });
    seedDatabase(resultarr);
  }
});
