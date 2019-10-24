const { fetchBreedDescription } = require('./breedFetcher');
let userInput = process.argv.slice(2);
console.log(`Looking for ${userInput}...`);
fetchBreedDescription(userInput, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});