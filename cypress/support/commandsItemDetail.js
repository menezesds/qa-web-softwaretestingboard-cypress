/// <reference types="Cypress"/>
import itemSelectors from "../selectors/itemSelectors"

Cypress.Commands.add('functionalItemDetailProprieties', (size, color, qnt) => {
    cy.get(size).click()
    cy.get(color).click()
    cy.get(itemSelectors.itemQuantityElement).clear().type(qnt)
})

Cypress.Commands.add('functionalGoToCheckoutShipping', () => {
    cy.waitUntilValueIsDisplayed(itemSelectors.showCartCounter, 1 ,5)    
    cy.get(itemSelectors.showCartCounter).click()
    cy.waitUntilExist(itemSelectors.checkoutCartPluginButton, 2, 500)
    cy.contains('button', itemSelectors.checkoutCartPluginButtonText).click({ force: true})
    cy.waitUntilValueIsDisplayed(itemSelectors.shippingPageTitle, itemSelectors.shippingPageTitleText, 5 ,1000)
})