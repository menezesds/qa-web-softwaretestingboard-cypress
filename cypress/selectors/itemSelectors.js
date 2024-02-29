const itemSelectors = {
    noResultMessage: 'Your search returned no results.',
    noresultElement: '.column > .message > div',
    searchInput: '#search',
    itemAmountReturn: '#toolbar-amount',
    productItemsList: '.product-items',
    firstProductItem: ':nth-child(1) > .product-item-info > .details > .name > .product-item-link',
    womensCategory: '.nav-2 > .level0',
    TopsCategory: '.nav-2-1 > .level1',
    jacketsCategory: '.nav-2-1-1',
    jacketsCategoryTitle: '.base',
    itemQuantityElement: '#qty',
    itemPriceElement: '#product-price-1236 > .price',
    itemSizeXsElement: '#option-label-size-143-item-166',
    itemSize28Element: '#option-label-size-143-item-171',
    itemColorBlackElement: '#option-label-color-93-item-49',
    itemAddToCartButton: '#product-addtocart-button',
    itemSizeErrorElement: '.size >.mage-error',
    itemColorErrorElement: '.color > .mage-error',
    itemQuantityErrorElement: '#qty-error',
    firstRelatedProductItem: ':nth-child(1) > .product-item-info > .details > .name > .product-item-link',
    showCartCounter: '.showcart > .counter',
    showCartCounterEmpty: '.showcart > .empty',
    showCartElement: '.showcart',
    excludeTrashButton: '.product-item-details > .actions > .secondary > .action',
    confirmationModal: '.confirm > .modal-inner-wrap > .modal-header',
    confirmationModalOkButton: '.action-primary',
    shopCartPluginSubtitle: '.subtitle',
    emptyShopCartPluginMessage: 'You have no items in your shopping cart.',
    viewAndEditCartButton: ':nth-child(7) > .secondary > .action > span',
    shoppingCartTitle: '.base',
    shoppingCartTitleText: 'Shopping Cart',
    itemSizeCartPage: '.item-options > :nth-child(2)',
    itemColorCartPage: '.item-options > :nth-child(4)',
    checkoutCartPluginButton: '.checkout',
    checkoutCartPluginButtonText: 'Proceed to Checkout',
    shippingPageTitle: '#shipping > .step-title',
    shippingPageTitleText:'Shipping Address'
}

export default itemSelectors;