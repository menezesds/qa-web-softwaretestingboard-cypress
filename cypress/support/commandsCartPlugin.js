/// <reference types="Cypress"/>
Cypress.Commands.add('functionalCartPluginValidation', (qnt) => {
    cy.get('.showcart > .counter').should('contain', qnt)
    cy.get('.showcart').click()
    cy.get('.count').should('contain', qnt)
    return cy.get('.minicart-price > .price')
})

Cypress.Commands.add('itemValue', (element)=>{
    let value;
    cy.get(element).then($value =>{
        value = $value.text()
    })
    return value;
})