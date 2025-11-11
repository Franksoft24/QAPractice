describe('QA Practice', () => {
  it('Search Movie Error', () => {
    cy.visit('/')
    cy.get('input[placeholder="Search movies..."]').type('Fast and Furious')
    cy.get('button[type="submit"]').click()
    cy.get("p").contains("Search failed").should("be.visible")
  })
  it('Remove from Favorites', () => {
    cy.visit('/')
    cy.get("h4").contains("Fast and Furios").parent().find("button").click()
  })  
})