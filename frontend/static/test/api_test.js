const request = require('supertest')('https://api.rawg.io/api/')
const assert = require('chai').assert;

describe(`games?key=${process.env.REACT_APP_API_KEY}`, () => {
it(`GET games?key=${process.env.REACT_APP_API_KEY}`, () => {
// Make a GET request to the users route
return request.get(`games?key=${process.env.REACT_APP_API_KEY}`).expect(200);
});
});


it(`GET games?key=${process.env.REACT_APP_API_KEY}`, () =>{
  // Make a GET request to the users route
  return request
  .get(`games?key=${process.env.REACT_APP_API_KEY}`)
  .expect(200)
  .then((res) => {
   // assert data bieng return to not be empty
   assert.isNotEmpty(res.body);
 });
});
