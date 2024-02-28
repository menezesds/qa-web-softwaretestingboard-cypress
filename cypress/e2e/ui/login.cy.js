/// <reference types="Cypress"/>
describe('UI Functional Test: Login', () => {
    it('Should redirect to home page after successul login with correct username and password', () => {
        cy.functional_login('test0001@cenglandb.com', '*t4K#^g*TT929Yq')
        cy.waitUntil(':nth-child(2) > .greet > .logged-in', 5)
        cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome, Test0001 Test!')
    })
    it('Should return failure when logging in with invalid username and an valid password', () => {
        cy.functional_login('test0002@cenglandb.com', '*t4K#^g*TT929Yq')
        cy.get('.message-error > div').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
    it('Should return failure when logging in with invalid username and password', () => {
        cy.functional_login('invalid_user@test.com', 'invalid_password')
        cy.get('.message-error > div').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
        
    });
    it('Should return failure when logging in with invalid password', () => {
        cy.functional_login('test0001@cenglandb.com', 'invalid_password')
        cy.get('.message-error > div').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    });
    it('Should return failure when logging in with empty password', () => {
        cy.functional_login('test0001@cenglandb.com', '')
        cy.get('.message-error > div').should('contain', 'A login and a password are required.')
    });

    it('Should return failure when logging in with empty username', () => {
        cy.functional_login('', '*t4K#^g*TT929Yq')
        cy.get('.message-error > div').should('contain', 'A login and a password are required.')
    });
});