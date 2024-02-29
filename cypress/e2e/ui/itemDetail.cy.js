/// <reference types="Cypress"/>
import { expect } from "chai";
import itemSelectors from "../../selectors/itemSelectors";

describe('UI Functional Test: Add and Edit card itens', () => {
    beforeEach(() => {
        cy.visit('')
        cy.functionalSearchByHome('Yoga').click()
    })

    it('Should add items by home search', () => {
        const qnt = 2;
        let productPrice;
        let cartProductPrice;
        
        cy.get(itemSelectors.itemPriceElement).then($value => {
            productPrice = $value.text()
        })
        cy.functionalItemDetailProprieties(itemSelectors.itemSizeXsElement, itemSelectors.itemColorBlackElement, qnt)
        cy.get(itemSelectors.itemAddToCartButton).click()
        cy.functionalCartPluginValidation(qnt).then($value =>{
            cartProductPrice = $value.text()
        })
        expect(productPrice).to.equal(cartProductPrice)
    })
    it('Shouldn not add item when not inform the size and color', () => {
        cy.get(itemSelectors.itemAddToCartButton).click()
        cy.validateEllementIsVisible([
            itemSelectors.itemSizeErrorElement,
            itemSelectors.itemColorErrorElement
        ])
    })
    it('Shouldn not add item when quantity is 0', () => {
        cy.functionalItemDetailProprieties(itemSelectors.itemSizeXsElement, itemSelectors.itemColorBlackElement, 0)
        cy.get(itemSelectors.itemAddToCartButton).click()
        cy.validateEllementIsVisible([
            itemSelectors.itemQuantityErrorElement,
        ])
    })
    it('Should add item from recomend list', () => {    
        const qntItem1 = 1;
        const qntItem2 = 1;
        cy.functionalItemDetailProprieties(itemSelectors.itemSizeXsElement, itemSelectors.itemColorBlackElement, qntItem1)
        cy.get(itemSelectors.itemAddToCartButton).click()
        cy.get(itemSelectors.firstRelatedProductItem).click()
        cy.functionalItemDetailProprieties(itemSelectors.itemSize28Element, itemSelectors.itemColorBlackElement, qntItem2)
        cy.get(itemSelectors.itemAddToCartButton).click()
        cy.functionalCartPluginValidation(qntItem1 + qntItem2)
    })
    it('Should remove item by cart plugin', () => {
        cy.functionalItemDetailProprieties(itemSelectors.itemSizeXsElement, itemSelectors.itemColorBlackElement, 1)
        cy.get(itemSelectors.itemAddToCartButton).click()
        cy.waitUntilValueIsDisplayed(itemSelectors.showCartCounter, 1 ,5)
        cy.get(itemSelectors.showCartElement).click()
        cy.get(itemSelectors.excludeTrashButton).click()
        cy.validateEllementIsVisible([
            itemSelectors.confirmationModal,
        ])
        cy.get(itemSelectors.confirmationModalOkButton).click()
        cy.waitUntilExist(itemSelectors.showCartCounterEmpty, 5)
        cy.get(itemSelectors.shopCartPluginSubtitle).should('contain', itemSelectors.emptyShopCartPluginMessage)

    })
    it('Should redirect the user to shopping cart page', () => {
        const itemSize = itemSelectors.itemSizeXsElement
        let itemSizeValue;
        const itemColor = itemSelectors.itemColorBlackElement
        let itemColorValue;
        const itemQnt = 1;
        let cartItemSizeValue;
        let cartItemColorValue;
        
        cy.functionalItemDetailProprieties(itemSize, itemColor, itemQnt)
        cy.get(itemSize).then($value =>{
            itemSizeValue = $value.text()
        })
        cy.get(itemColor).then($value =>{
            itemColorValue = $value.text()
        })
        cy.get(itemSelectors.itemAddToCartButton).click()
        cy.waitUntilValueIsDisplayed(itemSelectors.showCartCounter, 1 ,5)
        cy.get(itemSelectors.showCartElement).click()
        cy.get(itemSelectors.viewAndEditCartButton).click()
        cy.get(itemSelectors.shoppingCartTitle).should('contain', itemSelectors.shoppingCartTitleText)
        cy.get(itemSelectors.itemSizeCartPage).then($value => {
            cartItemSizeValue = $value.text()
        })
        cy.get(itemSelectors.itemColorCartPage).then($value => {
            cartItemColorValue = $value.text()
        })

        expect(itemSizeValue).to.be.equal(cartItemSizeValue)
        expect(itemColorValue).to.be.equal(cartItemColorValue)
    })
    it('Should redirect the user to checkout page', () => {    
        const itemSize = itemSelectors.itemSizeXsElement
        let itemSizeValue;
        const itemColor = itemSelectors.itemColorBlackElement
        let itemColorValue;
        const itemQnt = 1;
        let cartItemSizeValue;
        let cartItemColorValue;
        
        cy.functionalItemDetailProprieties(itemSize, itemColor, itemQnt)
        cy.get(itemSize).then($value =>{
            itemSizeValue = $value.text()
        })
        cy.get(itemColor).then($value =>{
            itemColorValue = $value.text()
        })
        cy.get(itemSelectors.itemAddToCartButton).click()
        cy.functionalGoToCheckoutShipping()
        
        cy.get(itemSelectors.itemSizeCartPage).then($value => {
            cartItemSizeValue = $value.text()
        })
        cy.get(itemSelectors.itemColorCartPage).then($value => {
            cartItemColorValue = $value.text()
        })

        expect(itemSizeValue).to.be.equal(cartItemSizeValue)
        expect(itemColorValue).to.be.equal(cartItemColorValue)
    })
})