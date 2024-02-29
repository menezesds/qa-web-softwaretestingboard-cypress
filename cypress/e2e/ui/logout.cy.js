/// <reference types="Cypress"/>
import cypressjson from "../../../cypres.json"
import loginSelectors from "../../selectors/loginSelectors"

describe('UI Functional Test: Sign out', () => {
    beforeEach(() => {
        cy.visit('')
        cy.functionalLogin(cypressjson.email, cypressjson.password)
        cy.waitUntilExist(loginSelectors.welcomeMessageWithUserName, 5)
    })
    it('should sign out', () => {
        cy.get(loginSelectors.customMenu).invoke('show')
        cy.contains('Sign Out').click()
        cy.validateEllementIsVisible([loginSelectors.sigInHeaderMenuButton])
    })
})