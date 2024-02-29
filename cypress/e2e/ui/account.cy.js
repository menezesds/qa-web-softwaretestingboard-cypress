/// <reference types="Cypress"/>
import accountSelectors from '../../selectors/accountSelectors';

beforeEach(()=>{
    cy.visit('')
    cy.enterCreateAccount()
    cy.get(accountSelectors.createAnAccountButton).click()
})
describe('UI Functional Test: Account', () => {
    it('should display message when try create account with no informations', () => {    
        cy.get(accountSelectors.createAnAccountFormButton).click()
        cy.validateEllementIsVisible([
            accountSelectors.firstNameErroMessageForm,
            accountSelectors.lastNameErroMessageForm,
            accountSelectors.emailErroMessageForm,
            accountSelectors.passwordErroMessageForm,
            accountSelectors.passwordConfirmationErroMessageForm,
            accountSelectors.formErroMessage,
        ])
    })
    it('should display message when try create account with First Name informations', () => {
        cy.fillForm({
            '#lastname' :'Test',
            '#email_address': 'test0001@test.com',
            '#password': '*t4K#^g*TT929Yq',
            '#password-confirmation': '*t4K#^g*TT929Yq',
        })
        cy.get(accountSelectors.createAnAccountFormButton).click()
        cy.validateEllementIsVisible([
            accountSelectors.firstNameErroMessageForm, 
            accountSelectors.formErroMessage,
        ])
    })
})