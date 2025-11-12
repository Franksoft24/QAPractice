import requestData from '../fixtures/requestData.json';

var backendUrl = 'http://localhost:3000';

describe('QA Practice', () => {
  // Define the movie title to be used in this tests
  before(() => {
    // Runs once before all tests in the block
    cy.request({
        method: 'POST', //Method POST to add a new movie
        url: backendUrl+"/favorites", //Favorites endpoint
        headers: {
          'OMDB_API_KEY': 'demo'    //Header with API key
        },
        body: requestData.RequestData //Request body with movie details from fixture
    })
  })
  beforeEach(() => {
    // Runs before each test in the block
    cy.viewport(1280, 720); //Set viewport size for consistency
    cy.visit('/') //Visit the base URL before each test
  });

  it('Search Movie', () => {
    cy.get('input[placeholder="Search movies..."]').type(requestData.RequestData.Title) //Type movie title in search input
    cy.get('button[type="submit"]').click() //Click the search button
    cy.get("h4").contains(requestData.RequestData.Title).should("be.visible") //Verify that the movie appears in the results
  })

  it('Remove from Favorites', () => {
    //I did create a test movie with this title to test the remove from favorites functionality
    cy.get("h4").contains(requestData.RequestData.Title).parent().find("button").click() 
    cy.get("h4").contains(requestData.RequestData.Title).should("not.exist") //Verify that the movie has been removed from favorites
  })  
})