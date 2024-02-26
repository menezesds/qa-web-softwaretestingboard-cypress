/// <reference types="Cypress"/>
describe('UI Functional Test: Item search', () => {
    it('Should return an item when search for an exist product by home', () => {
        cy.functional_search_by_home('Yoga', 'Items 1-12 of 30', true)
    })

    it('Should not return an item when search for an nonexistent product by home', () => {
        cy.functional_search_by_home('iphone', 'Your search returned no results.', false)
    })

    it('Should return an item when search for an exist product by Women category ', () => {
        cy.functional_search_by_category('Jacket', '12 Items')
    })
    
})