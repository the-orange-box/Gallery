// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('uuid');
AWS.config.update({ region: 'us-west-1' });
const bucketname = "hrsf123-airbnb-clone";

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Call S3 to list the buckets
// s3.listBuckets(function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Buckets);
//   }
// });

var params = {
  Bucket: bucketname,
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
    
    //  console.log(data.Contents);           // successful response
    s3.getObject(getParams, (err, dataresult) => {
      // console.log('here');
      if (err) {
        console.log(err);
      } else {
        console.log(dataresult);
      }
    });
  }
  /*
  data = {
   Contents: [
      {
     ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"", 
     Key: "example1.jpg", 
     LastModified: <Date Representation>, 
     Owner: {
      DisplayName: "myname", 
      ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
     }, 
     Size: 11, 
     StorageClass: "STANDARD"
    }, 
      {
     ETag: "\"9c8af9a76df052144598c115ef33e511\"", 
     Key: "example2.jpg", 
     LastModified: <Date Representation>, 
     Owner: {
      DisplayName: "myname", 
      ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
     }, 
     Size: 713193, 
     StorageClass: "STANDARD"
    }
   ], 
   NextMarker: "eyJNYXJrZXIiOiBudWxsLCAiYm90b190cnVuY2F0ZV9hbW91bnQiOiAyfQ=="
  }
  */
});

module.exports = s3;