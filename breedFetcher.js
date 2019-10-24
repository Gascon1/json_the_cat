const request = require('request');
let userInput = process.argv.slice(2);
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + userInput;




console.log(`Looking for ${userInput}...`);
request(URL, (error, response, body) => {
  if (error) {
    console.log('Something seems to be wrong with the URL');
  } else {
    const data = JSON.parse(body);
    if (data[0] !== undefined) {
      console.log(data[0]['description']);
    } else {
      console.log('Seems like you didnt write a valid cat breed!');
    }
  }
});


