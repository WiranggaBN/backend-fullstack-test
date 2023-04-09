const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

app.get('/photos', (req, res) => {
  const url = 'https://api.flickr.com/services/feeds/photos_public.gne'; 
  request(url, { json: true }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(body); 
    } else {
      res.status(response.statusCode).send(error); 
    }
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});