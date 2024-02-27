/// <reference types="Cypress"/>
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
        cy.functional_item_detail_proprieties('#option-label-size-143-item-166', '#option-label-color-93-item-49', qnt	)
        cy.get('#product-addtocart-button').click()
        cy.functional_cart_plugin_validation(qnt).then($value =>{
            cartProductPrice = $value.text()
        })
        expect(productPrice).to.equal(cartProductPrice)
    })

    it.only('Should add item from recomend list', () => {
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
})