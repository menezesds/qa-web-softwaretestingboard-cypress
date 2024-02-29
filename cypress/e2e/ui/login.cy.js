/// <reference types="Cypress"/>
import cypressjson from '../../../cypres.json'
import loginSelectors from "../../selectors/loginSelectors";

describe('UI Functional Test: Login', () => {
    beforeEach(() => {
        cy.visit('')
    })
    it('Should redirect to home page after successul login with correct username and password', () => {
        cy.functionalLogin(cypressjson.email, cypressjson.password)
        cy.waitUntilExist(loginSelectors.welcomeMessageWithUserName, 5)
        cy.get(loginSelectors.welcomeMessageWithUserName).should('contain', loginSelectors.welcomeMessage)
    })
    it('Should return failure when logging in with invalid username and an valid password', () => {
        cy.functionalLogin(loginSelectors.invalidUserName, cypressjson.password)
        cy.get(loginSelectors.loginErro).should('contain', loginSelectors.loginErroMessage)
    })
    it('Should return failure when logging in with invalid username and password', () => {
        cy.functionalLogin(loginSelectors.invalidUserName, loginSelectors.invalidPassword)
        cy.get(loginSelectors.loginErro).should('contain', loginSelectors.loginErroMessage)
        
    });
    it('Should return failure when logging in with invalid password', () => {
        cy.functionalLogin(cypressjson.email, loginSelectors.invalidPassword)
        cy.get(loginSelectors.loginErro).should('contain', loginSelectors.loginErroMessage)
    });
    it('Should return failure when logging in with empty password', () => {
        cy.functionalLogin(cypressjson.email, '')
        cy.get(loginSelectors.loginErro).should('contain', loginSelectors.loginRequiredFieldErroMessage)
    });

    it('Should return failure when logging in with empty username', () => {
        cy.functionalLogin('', cypressjson.password)
        cy.get(loginSelectors.loginErro).should('contain', loginSelectors.loginRequiredFieldErroMessage)
    });
});