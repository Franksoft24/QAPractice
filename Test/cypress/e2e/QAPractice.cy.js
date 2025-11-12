import FunctionalTestData from '../fixtures/FunctionalTestData.json';

const testMovies = FunctionalTestData.List_of_movies_to_search;

var backendUrl = 'http://localhost:3000';

describe('QA Practice', () => {
  // Define the movie title to be used in this tests
  beforeEach(() => {
    // Runs before each test in the block
    cy.viewport(1280, 720); //Set viewport size for consistency
    cy.visit('/') //Visit the base URL before each test
  });

  it.skip('Search Movies', () => {
    cy.log("Movie selected: "+testMovies[0]);
    cy.get('input[placeholder="Search movies..."]').type(testMovies[0]) //Type movie title in search input
    cy.get('button[type="submit"]').click() //Click the search button
    cy.get("h3").contains(testMovies[0]).should("be.visible") //Verify that the movie appears in the results
    cy.screenshot('Evidences/Search_Movies/'+testMovies[0]+"_test") //Take screenshot of the search results
  })

  it('Add to Favorites', () => {
    testMovies.forEach(movie =>{
      cy.log("Movie selected: "+movie); //Log the movie being processed
      cy.get('input[placeholder="Search movies..."]').clear().type(movie) //Type movie title in search input
      cy.get('button[type="submit"]').click() //Click the search button
      cy.get("h3").contains(movie).should("be.visible") //Verify that the movie appears in the results
      cy.get("h3").contains(movie).parent().find("button").click() //Click the Add to Favorites button for the movie
      cy.get("h4").contains(movie).should("be.visible") //Verify that the movie has been added to favorites
      cy.screenshot('Evidences/Add_to_Favorites/'+movie+"_test") //Take screenshot of the favorite movie added
    })
  })

  it('Remove from Favorites', () => {
    // Remove from Favorites test implementation
    testMovies.forEach(movie =>{
      cy.log("Movie selected: "+movie); //Log the movie being processed
      cy.get("h4").contains(movie).parent().find("button").click() //Click the Remove from Favorites button for the movie
      cy.get("h4").contains(movie).should("not.exist") //Verify that the movie has been removed from favorites
      cy.screenshot('Evidences/Remove_from_Favorites/'+movie+"_test") //Take screenshot of the favorite movie removed
    })  
})
})