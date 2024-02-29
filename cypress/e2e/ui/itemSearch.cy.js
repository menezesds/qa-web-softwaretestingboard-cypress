/// <reference types="Cypress"/>
import itemSelectors from '../../selectors/itemSelectors'

describe('UI Functional Test: Item search', () => {
    beforeEach(() => {
        cy.visit('')
    })
    it('Should return an item when search for an exist product by home', () => {
        cy.functionalSearchAndCheckByHome('Yoga', 'Items 1-12 of 30', true)
    })

    it('Should not return an item when search for an nonexistent product by home', () => {
        cy.functionalSearchAndCheckByHome('iphone', itemSelectors.noResultMessage , false)
    })

    it('Should return an item when search for an exist product by Women category ', () => {
        cy.functionalSearchByCategory('Jacket', '12 Items')
    })
    
})