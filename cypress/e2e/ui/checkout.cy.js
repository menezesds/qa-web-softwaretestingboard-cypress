/// <reference types="Cypress"/>
import checkoutSelectors from '../../selectors/checkoutSelectors'
describe('UI Functional Test: Checkout', () => {
    beforeEach(() => {
        cy.visit('')
        const itemSize = '#option-label-size-143-item-166'
        const itemColor = '#option-label-color-93-item-49'
        const itemQnt = 1;
        cy.functionalSearchByHome('Yoga').click()
        cy.functionalItemDetailProprieties(itemSize, itemColor, itemQnt)
        cy.get('#product-addtocart-button').click()
        cy.functionalGoToCheckoutShipping()
    })
    it('Should finished an order', () => {
        cy.fillForm({
            '#customer-email': 'test0001@test.com',
            'input[name="firstname"]': 'Text',
            'input[name="lastname"]': 'Text',
            'input[name="company"]': 'Jobsity',
            'input[name="street[0]"]': '711 Test Street',
            'input[name="street[1]"]': 'Apt 101',
            'input[name="city"]': 'Test City',
            'input[name="postcode"]': '30109',
            'input[name="telephone"]': '+1 311 9876222',        
        })
        cy.get(checkoutSelectors.stateSelectOption).select(1)
        cy.get(checkoutSelectors.shippingMethod0ValueOption).check()
        cy.get(checkoutSelectors.nextButton).should('contain', 'Next').click()
        cy.get(checkoutSelectors.placeOrderButton).click()
        cy.validateEllementIsVisible([
            checkoutSelectors.checkoutOrderNumber,
            checkoutSelectors.checkoutEmailInformationMessage,
            checkoutSelectors.checkoutContinueShoppingButton
        ])
        cy.get('.base').should('contain', 'Thank you for your purchase!')
    })
    it('Should not proceed to payment page when do not fill the shipping Method', () => {
        cy.fillForm({
            '#customer-email': 'test0001@test.com',
            'input[name="firstname"]': 'Text',
            'input[name="lastname"]': 'Text',
            'input[name="company"]': 'Jobsity',
            'input[name="street[0]"]': '711 Test Street',
            'input[name="street[1]"]': 'Apt 101',
            'input[name="city"]': 'Test City',
            'input[name="postcode"]': '30109',
            'input[name="telephone"]': '+1 311 9876222',        
        })
        cy.get(checkoutSelectors.stateSelectOption).select(1)
        cy.get('.button > span').should('contain', 'Next').click()
        cy.validateEllementIsVisible([
            checkoutSelectors.missingShippingMethodsErrorMessage
        ])
    })
    it('Should not proceed to payment page when do not fill the form information', () => {
        cy.get(checkoutSelectors.shippingMethod0ValueOption).check()
        cy.get(checkoutSelectors.nextButton).should('contain', 'Next').click()
        
        cy.get('.field-error').should('have.length', 7)
    })

})