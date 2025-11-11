var backendUrl = 'http://localhost:3000';
describe("Endpoint Test Suite", () => {

    it("GET / - health status", () => {
    cy.request({
        method: 'GET',  //Method GET to check health status
        url: backendUrl+"/health" //Health endpoint
    }).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200
    });
  });

  it("POST /favorites - success", () => {
    cy.request({
        method: 'POST', //Method POST to add a new movie
        url: backendUrl+"/favorites", //Favorites endpoint
        headers: {
          'OMDB_API_KEY': 'demo'    //Header with API key
        },
        body: { //Request body with movie details
            "imdbID": "tt1375667",
            "Title": "Inception",
            "Year": "2010",
            "Poster": "testimage.jpg"
        }
    }).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful addition.
    });
  });
  it("GET /favorites - success", () => {
    cy.request({
        method: 'GET', //Method GET to retrieve favorite movies
        url: backendUrl+"/favorites", //Favorites endpoint
        headers: {
          'OMDB_API_KEY': 'demo'
        }
    }).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful retrieval.
    });
  });
  it("GET /Search", () => {
    cy.request({
        method: 'GET', //Method GET to search for movies
        url: backendUrl+"/movies/search?q=Inception&page=1",  //Search endpoint with query parameters
        headers: {  //Headers with API key
          'OMDB_API_KEY': 'demo'
        },
        failOnStatusCode: false //Bug: This test case returns an error code 500. 
    }).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful search. But the actual response is 500.
    });
  });
  it("DELETE /favorites/:imdbID - success", () => { //Method DELETE to remove a movie from favorites
    cy.request({
        method: 'DELETE',  //Delete method
        url: backendUrl+"/favorites/tt1375667", //Favorites endpoint with specific imdbID of the movie to be deleted is the same as the one added in the POST test case
        headers: {
          'OMDB_API_KEY': 'demo'
        }
    }).then((response) => {
        expect(response.status).to.eq(200); //Expecting status code 200 for successful deletion.
    });
  });
});