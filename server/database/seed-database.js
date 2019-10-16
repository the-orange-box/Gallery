const db = require('./index.js');
const faker = require('faker');
const s3 = require('./aws-s3.js');
const Promise = require('bluebird');

var seedDatabase = function (urls) {
  let imageData;
  var promises = [];

  for ( var i = 0; i < urls.length; i++) {
    imageData = generateRandomImage(i % 2, urls[i]);
    //placeID: imageData.placeID, 
    promises.push(db.galleryModel.findOneAndUpdate({image: imageData.image}, imageData, { new: true, upsert: true }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('image insertFed');
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
  var randomID = id;//faker.random.number();
  var randomText = faker.lorem.sentences();

  return {
    placeID: randomID,
    image: randomImageURL,
    caption: randomText,
    verified: randomBoolean
  };
};

bucketname = "hrsf123-airbnb-clone";

var params = {
  Bucket: bucketname
  // MaxKeys: 2
};

s3.listObjects(params, function (err, data) {
  if (err) {
    console.log(err, err.stack); // an error occurred
  } else {
    var getParams = {
      Bucket: bucketname,
      Key: data.Contents[0].Key, // your bucket name,
      // Key: 'abc.txt' // path to the object you're looking for
    }

    var url = 'https://hrsf123-airbnb-clone.s3-us-west-1.amazonaws.com/';
    var resultarr = [];
    data.Contents.forEach((item)=>{
      resultarr.push(url + item.Key);
    });
    seedDatabase(resultarr);
  }
});
