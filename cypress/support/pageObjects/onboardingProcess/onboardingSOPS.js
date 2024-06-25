/// <reference types="Cypress" />

require('cypress-xpath');
require('cypress-plugin-tab')

import 'cypress-file-upload'
import vars from '../../../../variables';

class onboarding {
    applicant() {
        vars.instance = prompt('What instance it is?')
        vars.enviroment = prompt('What enviroment it is?')
        if(vars.enviroment == 'staging') {
            vars.enviroment = '.staffwizardstaging.com'
        } else {
            if(vars.enviroment == 'live'){
                vars.enviroment = '.staffwizard.com'
            } else {
                alert('Error')
            }
        }
        cy.log(vars.enviroment)
        cy.visit('https://' + vars.instance + vars.enviroment + '/jobs')
        cy.get('.latest-job-box')
        .eq(0)
        .should('include.text', vars.jobTitle)
        .find('.btn-primary')
        .click()
    }

    pInf() {
        //01. Personal Information
        cy.text_field('#firstName', vars.fName)
        cy.text_field('#middleName', vars.mName)
        cy.text_field('#lastName', vars.lName)
        cy.text_field('#nickName', vars.nName)
        cy.text_field('#email', vars.email)
        cy.text_field('#phone', vars.phone)
        cy.switch_click('.switch', '0', 'left')
        cy.text_field('#address', vars.address)
        cy.text_field('#zipcode', vars.zip)
        cy.text_field('#city', vars.city)
        cy.text_field('#state', vars.shState)
        // cy.select_field('#maritalStatus', vars.marital)
        // cy.text_field('#ssn', vars.ssn)
        // cy.text_field('#datepicker', vars.dob)
        // cy.tab()
        // cy.pause()
        cy.btn_click_eq('.btn-submit', '0')
        cy.wait(500)
    }

    eInf() {
        // 02. Employemnt Information
        cy.switch_click('.switch', '1', 'left')
        cy.switch_click('.switch', '2', 'left')
        cy.select_field('#work_night', 'Day Shift')
        cy.select_field('#referrer', vars.refer)
        cy.get('.switch')
            .contains('Full-Time')
            .click()
        cy.switch_click('.switch', '3', 'right')
        cy.switch_click('.switch', '4', 'right')
        cy.switch_click('.switch', '5', 'right')
        cy.checkbox('.dyn_check', '1')
        cy.checkbox('.dyn_check', '3')
        cy.switch_click('.switch', '6', 'right')
        cy.upload_eq('[type="file"]', 'guardLic.png', '0')
        cy.upload_eq('[type="file"]', 'staffwizard_com.pdf', '1')
        cy.btn_click_eq('.btn-submit', '1')
        cy.wait(500)
    }
}

export default onboarding;

