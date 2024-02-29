const checkoutSelectors = {
    checkoutOrderNumber: '.checkout-success > :nth-child(1) > span',
    checkoutSuccesMessage: 'Thank you for your purchase!',
    checkoutEmailInformationMessage: '.checkout-success > :nth-child(2)',
    checkoutContinueShoppingButton: 'div.primary > .action',
    placeOrderButton: '.payment-method-content > :nth-child(4) > div.primary > .action',
    nextButton: '.button > span',
    shippingMethod0ValueOption: ':nth-child(1) > :nth-child(1) > .radio',
    stateSelectOption: 'select[name=region_id]',
    missingShippingMethodsErrorMessage: '#co-shipping-method-form > .message',
    emailRequiredFieldMessage: '#customer-email-error',
    firstNameRequiredFieldMessage: 'input[name="firstname"] > .field-error > span'

}   

export default checkoutSelectors;