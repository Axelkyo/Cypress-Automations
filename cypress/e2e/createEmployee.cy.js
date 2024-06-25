/// <reference types="Cypress" />

import add_emp from '../support/pageObjects/createEmployee/employeePO';
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')

describe('Add a new employee', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    const emp = new add_emp();

    it('Create employee', function() {
        emp.login()
        emp.emp_forms()
    })
})