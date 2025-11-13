// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('post', (apiUrl, endpoint, code, data) => {
    cy.request({
        method: 'POST', //Method POST 
        url: apiUrl+"/"+endpoint, //API endpoint
        body: data, //Request body
        failOnStatusCode: false //To handle negative test cases
    }).then((response) => {
        expect(response.status).to.eq(code?? 201); //Expecting status code 201 as default.
    });
});

Cypress.Commands.add('getReq', (apiUrl, endpoint, code, param) => {
    cy.request({
        method: 'GET', //Method GET 
        url: apiUrl+"/"+endpoint, //API endpoint
        qs: param, //Query parameters
        failOnStatusCode: false //To handle negative test cases
    }).then((response) => {
        expect(response.status).to.eq(code?? 200); //Expecting status code 200 as default.
    });
});

Cypress.Commands.add('delete', (apiUrl, endpoint, code, param) => {
    cy.request({
        method: 'Delete', //Method Delete 
        url: apiUrl+"/"+endpoint+"/"+param, //API endpoint
        failOnStatusCode: false //To handle negative test cases
    }).then((response) => {
        expect(response.status).to.eq(code?? 200); //Expecting status code 200 as default.
    });
});