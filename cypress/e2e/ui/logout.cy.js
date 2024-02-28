/// <reference types="Cypress"/>
describe('UI Functional Test: Sign out', () => {
    it.only('should sign out', () => {
        cy.functional_login('test0001@cenglandb.com', '*t4K#^g*TT929Yq')
        cy.waitUntil(':nth-child(2) > .greet > .logged-in', 5)
        cy.get('.customer-menu').invoke('show')
        cy.contains('Sign Out').click()
        cy.get('.panel > .header > .authorization-link > a').should('be.visible')
    })
})