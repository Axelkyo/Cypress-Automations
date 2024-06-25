/// <reference types="Cypress" />

import add_client from '../support/pageObjects/createClient/clientPO';
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')

describe('Add a new client', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    const client = new add_client();

    it('Create Client', function() {
        client.login()
        client.client_forms()
    })
})