var backendUrl = 'http://localhost:3000';
describe("Endpoint Test Suite", () => {

    it("GET / - health status", () => {
    cy.request({
        method: 'GET',
        url: backendUrl+"/health"
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
  });

  it("POST /favorites - success", () => {
    cy.request({
        method: 'POST',
        url: backendUrl+"/favorites",
        headers: {
          'OMDB_API_KEY': 'demo'
        },
        body: {
            "imdbID": "tt1375667",
            "Title": "Inception",
            "Year": "2010",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
  });
  it("GET /favorites - success", () => {
    cy.request({
        method: 'GET',
        url: backendUrl+"/favorites",
        headers: {
          'OMDB_API_KEY': 'demo'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
  });
  it("GET /Search", () => {
    cy.request({
        method: 'GET',
        url: backendUrl+"/movies/search?q=Inception&page=1",
        headers: {
          'OMDB_API_KEY': 'demo'
        },
        failOnStatusCode: false //Bug: This test case returns an error code 500. 
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
  });
  it("DELETE /favorites/:imdbID - success", () => {
    cy.request({
        method: 'DELETE',
        url: backendUrl+"/favorites/tt1375667",
        headers: {
          'OMDB_API_KEY': 'demo'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
  });
});