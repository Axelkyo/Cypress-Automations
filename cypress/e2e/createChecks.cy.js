/// <reference types="Cypress" />

// import * as vars from '../../variables'
import data_emp from '../support/pageObjects/payrollJornal/payroll_data'
import createChecks from '../support/pageObjects/payrollJornal/vrollJURN'
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')

describe('Create check for JURN instance', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    const checks = new createChecks();

    it('Add checks to payroll', function() {
        let t = 350
        let id = 0
        checks.loginVroll()
        cy.wait(350)
        checks.payrollChecks()
        cy.wait(1000)
        checks.selEmp('/html/body/div[3]/div/div[1]/div/div/div/div[4]/div[2]/div[1]/div[6]',data_emp[id].firstName, data_emp[id].lastName, t)
        cy.wait(350)
        checks.filter_button()
        checks.filter_field(data_emp[id].firstName, data_emp[id].lastName, '{enter}')
        cy.wait(350)
        checks.addCheck(data_emp[id].gross)
        cy.wait(350)
        checks.reset()
        cy.log('Employee Info: ' + id + ' ' + ' ' + data_emp[id].firstName + ' ' + data_emp[id].lastName)
        cy.wait(350)
        // Change the id in every PDF file
        for(id = id+1 ; id <= 29; id++){
            // For loop begins
            checks.selEmp('/html/body/div[3]/div/div[1]/div/div/div/div[4]/div[2]/div[1]/div[6]',data_emp[id].firstName, data_emp[id].lastName, t)
            cy.wait(350)
            checks.filter_field(data_emp[id].firstName, data_emp[id].lastName)
            cy.wait(350)
            checks.addCheck(data_emp[id].gross)
            cy.wait(350)
            checks.reset()
            cy.log('Employee Info: ' + id + ' ' + ' ' + data_emp[id].firstName + ' ' + data_emp[id].lastName)
            cy.wait(350)
        }
    })

})