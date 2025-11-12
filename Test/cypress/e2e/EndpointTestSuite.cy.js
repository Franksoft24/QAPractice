import requestData from '../fixtures/requestData.json';

var backendUrl = 'http://localhost:3000';

describe("Health Check Endpoint", () => {

  it("GET / - health status", () => {
    cy.request({
        method: 'GET',  //Method GET to check health status
        url: backendUrl+"/health" //Health endpoint
    }).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200
    });
  });
  
});

describe("Endpoint Test Suite", () => {
  var testData = requestData.RequestData; //Importing test data from fixture

  it("POST /favorites - success", () => {
    cy.request({
        method: 'POST', //Method POST to add a new movie
        url: backendUrl+"/favorites", //Favorites endpoint
        body: testData //Request body with movie details from fixture
    }).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful addition.
    });
  });

  it("GET /favorites - success", () => {
    cy.request({
        method: 'GET', //Method GET to retrieve favorite movies
        url: backendUrl+"/favorites", //Favorites endpoint
    }).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful retrieval.
    });
  });

  it("GET /Search", () => {
    cy.request({
        method: 'GET', //Method GET to search for movies
        url: backendUrl+"/movies/search?apikey=demo&s="+testData.Title+"&page=1",  //Search endpoint with query parameters
        failOnStatusCode: false //Bug: This test case returns an error code 500. 
    }).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful search. But the actual response is 500.
    });
  });

  it("DELETE /favorites/:imdbID - success", () => { //Method DELETE to remove a movie from favorites
    cy.request({
        method: 'DELETE',  //Delete method
        url: backendUrl+"/favorites/"+testData.imdbID, //Favorites endpoint with specific imdbID of the movie to be deleted is the same as the one added in the POST test case
    }).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful deletion.
    });
  });
});