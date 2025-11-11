var movieTitle = "Inception d";
var backendUrl = 'http://localhost:3000';

describe('QA Practice', () => {
  before(() => {
    // Runs once before all tests in the block
    cy.request({
        method: 'POST', //Method POST to add a new movie
        url: backendUrl+"/favorites", //Favorites endpoint
        headers: {
          'OMDB_API_KEY': 'demo'    //Header with API key
        },
        body: { //Request body with movie details
            "imdbID": "tt1375667",
            "Title": movieTitle,
            "Year": "2010",
            "Poster": "testimage.jpg"
        }
    })
  })
  
  it('Search Movie', () => {
    cy.visit('/') //Visit the base URL
    cy.get('input[placeholder="Search movies..."]').type(movieTitle) //Type movie title in search input
    cy.get('button[type="submit"]').click() //Click the search button
    cy.get("h4").contains(movieTitle).should("be.visible") //Verify that the movie appears in the results
  })

  it('Remove from Favorites', () => {
    cy.visit('/')
    //I did create a test movie with this title to test the remove from favorites functionality
    cy.get("h4").contains(movieTitle).parent().find("button").click() 
    cy.get("h4").contains(movieTitle).should("not.exist") //Verify that the movie has been removed from favorites
  })  
})