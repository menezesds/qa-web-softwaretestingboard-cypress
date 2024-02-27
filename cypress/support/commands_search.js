/// <reference types="Cypress"/>
Cypress.Commands.add('functional_search_by_home', (item) => {
    cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('#search').type(item).type('{enter}')
        cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').should('contain', item)
})


Cypress.Commands.add('functional_search_and_check_by_home', (item, itemAmountReturnMessage, productIsVisible) => {
    cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('#search').type(item).type('{enter}')
        if(productIsVisible == true) {
            cy.get('#toolbar-amount').should('contain', itemAmountReturnMessage)
            cy.get('.product-items').should('be.visible')
            cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').should('contain', item)
        } else {
            cy.get('.product-items').should('not.exist')
            cy.get('.column > .message > div').should('contain', itemAmountReturnMessage)
        }
})

Cypress.Commands.add('functional_search_by_category', (category, itemAmountReturnMessage) => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.nav-2 > .level0').invoke('show').trigger('mouseover')
    cy.get('.nav-2-1 > .level1').invoke('show').trigger('mouseover')
    cy.get('.nav-2-1-1').click()
    cy.get('.base').should('contain', category)
    cy.get('#toolbar-amount').should('contain', itemAmountReturnMessage)
    cy.get('.product-items').should('be.visible')
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').should('contain', category)
})
