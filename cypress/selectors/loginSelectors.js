const loginSelectors = {
    invalidUserName: 'test0002@cenglandb.com',
    invalidPassword: '#Des86dh$5j',
    welcomeMessageWithUserName: ':nth-child(2) > .greet > .logged-in',
    welcomeMessage: 'Welcome, Test0001 Test!',
    loginErroMessage: 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.',
    loginErro: '.message-error > div',
    loginRequiredFieldErroMessage: 'A login and a password are required.',
    customMenu: '.customer-menu',
    sigInHeaderMenuButton: '.panel > .header > .authorization-link > a',
    signInLoginButton: '.actions-toolbar > div.primary > .login',
    loginPageTitleText: 'Customer Login',
    loginPageTitle: '.base'
};

export default loginSelectors;