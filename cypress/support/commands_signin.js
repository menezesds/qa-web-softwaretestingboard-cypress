/// <reference types="Cypress"/>
Cypress.Commands.add('functional_signin', (username, password) => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').contains('Sign In').click()
})