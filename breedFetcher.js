const request = require('request');

const fetchBreedDescription = (argument, callback) => {
  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + argument;
  request(URL, (error, response, body) => {
    if (error) {
      callback('Something seems to be wrong with the URL');
    } else {
      const data = JSON.parse(body);
      if (data[0] !== undefined) {
        callback(error, data[0]['description'].trim());
      } else {
        callback('Seems like you didnt write a valid cat breed!');
      }
    }
  });
};

module.exports = { fetchBreedDescription };