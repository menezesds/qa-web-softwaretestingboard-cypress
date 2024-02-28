/// <reference types="Cypress"/>
Cypress.Commands.add('functional_cart_plugin_validation', (qnt) => {
    cy.get('.showcart > .counter').should('contain', qnt)
    cy.get('.showcart').click()
    cy.get('.count').should('contain', qnt)
    return cy.get('.minicart-price > .price')
})

Cypress.Commands.add('item_Value', (element)=>{
    let value;
    cy.get(element).then($value =>{
        value = $value.text()
    })
    return value;
})