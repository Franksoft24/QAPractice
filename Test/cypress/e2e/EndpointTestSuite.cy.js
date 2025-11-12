import requestData from '../fixtures/requestData.json';
import '../support/commands.js'; //Importing custom commands for the API tests

var backendUrl = 'http://localhost:3000';

describe("Health Check Endpoint", () => {

  it("GET / - health status", () => {
    var endpoint = "health";
    cy.getReq(backendUrl, endpoint).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200
    });
  });
  
});

describe("Favorite endpoint Test Suite", () => {
  var testData = requestData.RequestData; //Importing test data from fixture
  var endpoint = "favorites";
  it("POST /favorites - success", () => {
    var endpoint = "favorites";
    cy.post(backendUrl, endpoint, testData).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful addition.
    });
  });

  it("GET /favorites - success", () => {
    var endpoint = "favorites";
    cy.getReq(backendUrl, endpoint).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful retrieval.
    });
  });

  it("DELETE /favorites/:imdbID - success", () => { //Method DELETE to remove a movie from favorites
    var endpoint = "favorites";
    cy.delete(backendUrl,endpoint,testData.imdbID).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful deletion.
    });
  });
});

describe("Search endpoint Test", () => {
  var testData = requestData.RequestData; //Importing test data from fixture
  var endpoint = "movies/search";

  it("GET /movies/search - success", () => {
    cy.getReq(backendUrl, endpoint, { apikey: requestData.apiKey, s: testData.Title, page: 1 }).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful search.
    });
  });

});     

describe("Negative Test Cases for Favorite endpoint", () => {
  var testData = requestData.RequestData; //Importing test data from fixture
  var endpoint = "favorites";

  it("POST /favorites - empty object", () => {
    var incompleteData = {}; //Empty data
    cy.post(backendUrl, endpoint, incompleteData).then((response) => {
        expect(response.status).to.eq(400); //Expecting status code 400 for bad request due to missing fields.
    });
  });

  it("POST /favorites - missing fields", () => {
    var incompleteData = {"Title": testData.Title, "Year":testData.Year}; //Incomplete data with missing fields
    cy.post(backendUrl, endpoint, incompleteData).then((response) => {
        expect(response.status).to.eq(400); //Expecting status code 400 for bad request due to missing fields.
    });
  });

  it("DELETE /favorites/:imdbID - non-existent movie", () => {
    var nonExistentImdbID = "tt0000000"; //Non-existent IMDb ID
    cy.delete(backendUrl, endpoint, nonExistentImdbID).then((response) => {
        expect(response.status).to.eq(404); //Expecting status code 404 for not found.
    });
  });

  it("POST /favorites - Only ID", () => {
    var invalidData = {"imdbID": 1234567}; //imdbID should be string
    cy.post(backendUrl, endpoint, invalidData).then((response) => {
        expect(response.status).to.eq(400); //Expecting status code 400 for bad request due to invalid data types.
    });
  });

});