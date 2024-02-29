/// <reference types="Cypress"/>
import itemSelectors from "../selectors/itemSelectors"

Cypress.Commands.add('functionalSearchByHome', (item) => {
    cy.get(itemSelectors.searchInput).type(item).type('{enter}')
    cy.get(itemSelectors.firstProductItem).should('contain', item)
})


Cypress.Commands.add('functionalSearchAndCheckByHome', (item, itemAmountReturnMessage, productIsVisible) => {
    cy.get(itemSelectors.searchInput).type(item).type('{enter}')
    if(productIsVisible == true) {
        cy.get(itemSelectors.itemAmountReturn).should('contain', itemAmountReturnMessage)
        cy.get(itemSelectors.productItemsList).should('be.visible')
        cy.get(itemSelectors.firstProductItem).should('contain', item)
    } else {
        cy.get(itemSelectors.productItemsList).should('not.exist')
        cy.get(itemSelectors.noresultElement).should('contain', itemAmountReturnMessage)
    }
})

Cypress.Commands.add('functionalSearchByCategory', (category, itemAmountReturnMessage) => {
    cy.get(itemSelectors.womensCategory).invoke('show')
    cy.get(itemSelectors.TopsCategory).invoke('show')
    cy.get(itemSelectors.jacketsCategory).click()
    cy.get(itemSelectors.jacketsCategoryTitle).should('contain', category)
    cy.get(itemSelectors.itemAmountReturn).should('contain', itemAmountReturnMessage)
    cy.get(itemSelectors.productItemsList).should('be.visible')
    cy.get(itemSelectors.firstProductItem).should('contain', category)
})
