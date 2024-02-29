import "cypress-real-events";
import './commands'
import './commandsLogin'
import './commandsSearch'
import './commandsItemDetail'
import './commandsCartPlugin'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})