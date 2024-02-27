/// <reference types="Cypress"/>
Cypress.Commands.add('functional_login', (username, password) => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').contains('Sign In').click()
    cy.get('.base').should('be.visible').should('contain', 'Customer Login')
    if(username != '') cy.get('#email').type(username)
    if(password != '') cy.get('#pass').type(password)
    cy.get('.actions-toolbar > div.primary > .login').should("contain", "Sign In").click()
})