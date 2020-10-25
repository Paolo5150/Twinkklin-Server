const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'htnecnjo6', 
    api_key: '811469652986219', 
    api_secret: 'yfBaEsGVJE2n5k7R0v4Md3Ab4Zs' 
  });
/*
  cloudinary.search
  .expression('folder:images/jewels/J1')
  .sort_by('public_id','desc')
  .max_results(30)
  .execute().then(result=>console.log(result));*/

  // Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*' );

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/load_collection', (req, res) => {
    console.log('received') 
  cloudinary.search
  .expression('resource_type:image AND filename:thumbnail*')
  .sort_by('public_id','desc')
  .max_results(30)
  .execute().then(result=>{
    res.send(result)});
  
});