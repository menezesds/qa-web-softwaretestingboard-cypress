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

Cypress.Commands.add('waitUntilExist', (element, numberOfTry) => { 
    for (let index = 0; index < numberOfTry; index++) {
        if(cy.get(element).should('exist')){
            break;
        }
        index++
    }
 })

 Cypress.Commands.add('waitUntilValueIsDisplayed', (element, value, numberOfTry) => { 
    for (let index = 0; index < numberOfTry; index++) {
        if(cy.get(element).should('contain', value)){
            break;
        }
        index++
    }
 })

 Cypress.Commands.add('waitUntilNotExist', (element, numberOfTry) => { 
    for (let index = 0; index < numberOfTry; index++) {
        if(!cy.get(element).should('exist')){
            break;
        }
        index++
    }
 })