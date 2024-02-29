/// <reference types="Cypress"/>
import accountSelectors from '../selectors/accountSelectors';
import logginSelectors from '../selectors/loginSelectors';

Cypress.Commands.add('enterCreateAccount', () => {
    cy.get(accountSelectors.signInHeaderPanelButton).contains('Sign In').click()
})

Cypress.Commands.add('functionalLogin', (username, password) => {
    cy.get(accountSelectors.signInHeaderPanelButton).contains('Sign In').click()
    cy.get(logginSelectors.loginPageTitle).should('be.visible').should('contain', logginSelectors.loginPageTitleText)
    if(username != '') cy.get('#email').type(username)
    if(password != '') cy.get('#pass').type(password)
    cy.get(logginSelectors.signInLoginButton).should("contain", "Sign In").click()
})