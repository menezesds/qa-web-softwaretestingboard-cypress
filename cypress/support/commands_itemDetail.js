/// <reference types="Cypress"/>
Cypress.Commands.add('functional_item_detail_proprieties', (size, color, qnt) => {
    cy.get(size).click()
    cy.get(color).click()
    cy.get('#qty').clear().type(qnt)
})


