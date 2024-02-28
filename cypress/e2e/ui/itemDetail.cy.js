/// <reference types="Cypress"/>
import { expect } from "chai";

describe('UI Functional Test: Add and Edit card itens', () => {
    it('Should add items by home search', () => {
        cy.once('uncaught:exception', () => false);
        const qnt = 2;
        let productPrice;
        let cartProductPrice;
        cy.functional_search_by_home('Yoga').click()
        cy.get('#product-price-1236 > .price').then($value => {
            productPrice = $value.text()
        })
        cy.functional_item_detail_proprieties('#option-label-size-143-item-166', '#option-label-color-93-item-49', qnt)
        cy.get('#product-addtocart-button').click()
        cy.functional_cart_plugin_validation(qnt).then($value =>{
            cartProductPrice = $value.text()
        })
        expect(productPrice).to.equal(cartProductPrice)
    })
    it('Shouldn not add item when not inform the size and color', () => {
        cy.functional_search_by_home('Yoga').click()
        cy.get('#product-addtocart-button').click()
        cy.get('.size >.mage-error').should('be.visible')
        cy.get('.color > .mage-error').should('be.visible')
    })
    it('Shouldn not add item when quantity is 0', () => {
        cy.functional_search_by_home('Yoga').click()
        cy.functional_item_detail_proprieties('#option-label-size-143-item-166', '#option-label-color-93-item-49', 0)
        cy.get('#product-addtocart-button').click()
        cy.get('#qty-error').should('be.visible')
    })
    it('Should add item from recomend list', () => {
        cy.once('uncaught:exception', () => false);
        const qntItem1 = 1;
        const qntItem2 = 1;
        cy.functional_search_by_home('Yoga').click()
        cy.functional_item_detail_proprieties('#option-label-size-143-item-166', '#option-label-color-93-item-49', qntItem1)
        cy.get('#product-addtocart-button').click()
        cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click()
        cy.functional_item_detail_proprieties('#option-label-size-143-item-171', '#option-label-color-93-item-49', qntItem2)
        cy.get('#product-addtocart-button').click()
        cy.functional_cart_plugin_validation(qntItem1 + qntItem2)
    })
    it('Should remove item by cart plugin', () => {
        cy.once('uncaught:exception', () => false);
        cy.functional_search_by_home('Yoga').click()
        cy.functional_item_detail_proprieties('#option-label-size-143-item-166', '#option-label-color-93-item-49', 1)
        cy.get('#product-addtocart-button').click()
        cy.waitUntilValueIsDisplayed('.showcart > .counter', 1 ,5)
        cy.get('.showcart').click()
        cy.get('.product-item-details > .actions > .secondary > .action').click()
        cy.get('.confirm > .modal-inner-wrap > .modal-header').should('be.visible')
        cy.get('.action-primary').click()
        cy.waitUntilExist('.showcart > .empty', 5)
        cy.get('.subtitle').should('contain', 'You have no items in your shopping cart.')

    })
    it('Should redirect the user to shopping cart page', () => {
        const itemSize = '#option-label-size-143-item-166'
        let itemSizeValue;
        const itemColor = '#option-label-color-93-item-49'
        let itemColorValue;
        const itemQnt = 1;
        let cartItemSizeValue;
        let cartItemColorValue;
        
        cy.once('uncaught:exception', () => false);
        cy.functional_search_by_home('Yoga').click()
        cy.functional_item_detail_proprieties(itemSize, itemColor, itemQnt)
        cy.get(itemSize).then($value =>{
            itemSizeValue = $value.text()
        })
        cy.get(itemColor).then($value =>{
            itemColorValue = $value.text()
        })
        cy.get('#product-addtocart-button').click()
        cy.waitUntilValueIsDisplayed('.showcart > .counter', 1 ,5)
        cy.get('.showcart').click()
        cy.get(':nth-child(7) > .secondary > .action > span').click()
        cy.get('.base').should('contain', 'Shopping Cart')
        cy.get('.item-options > :nth-child(2)').then($value => {
            cartItemSizeValue = $value.text()
        })
        cy.get('.item-options > :nth-child(4)').then($value => {
            cartItemColorValue = $value.text()
        })

        expect(itemSizeValue).to.be.equal(cartItemSizeValue)
        expect(itemColorValue).to.be.equal(cartItemColorValue)
    })
    it.skip('Should redirect the user to checkout page', () => {
        cy.once('uncaught:exception', () => false);
        
        const itemSize = '#option-label-size-143-item-166'
        let itemSizeValue;
        const itemColor = '#option-label-color-93-item-49'
        let itemColorValue;
        const itemQnt = 1;
        let cartItemSizeValue;
        let cartItemColorValue;
        
        cy.functional_search_by_home('Yoga').click()
        cy.functional_item_detail_proprieties(itemSize, itemColor, itemQnt)
        cy.get(itemSize).then($value =>{
            itemSizeValue = $value.text()
        })
        cy.get(itemColor).then($value =>{
            itemColorValue = $value.text()
        })
        cy.get('#product-addtocart-button').click()
        cy.waitUntilValueIsDisplayed('.showcart > .counter', 1 ,5)
        cy.get('.showcart > .counter').click()
        cy.get('.checkout').should('contain', 'Proceed to Checkout').dblclick({ force: true })
        cy.waitUntilValueIsDisplayed('#shipping > .step-title', 1 ,5)
        cy.get('#shipping > .step-title').should('contain', 'Shipping Address')
        cy.get('.item-options > :nth-child(2)').then($value => {
            cartItemSizeValue = $value.text()
        })
        cy.get('.item-options > :nth-child(4)').then($value => {
            cartItemColorValue = $value.text()
        })

        expect(itemSizeValue).to.be.equal(cartItemSizeValue)
        expect(itemColorValue).to.be.equal(cartItemColorValue)
    })
})