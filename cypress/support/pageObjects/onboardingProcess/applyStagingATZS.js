/// <reference types="Cypress" />

require('cypress-xpath');
require('cypress-plugin-tab')

import 'cypress-file-upload'
import vars from '../../../../variables';
let time = 300

class apply {
    applicant() {
        cy.log(vars.instance)
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
        cy.text_field('#address', vars.address)
        cy.text_field('#zipcode', vars.zip)
        cy.text_field('#city1', vars.city)
        cy.text_field('#state', vars.shState)
        cy.select_field('#maritalStatus', vars.marital)
        cy.text_field('#ssn', vars.ssn)
        // cy.text_field('#datepicker', vars.dob)
        cy.tab()
        cy.wait(time)
        cy.btn_click_eq('.btn-submit', '0')
    }

    eInf() {
        // 02. Employemnt Information
        cy.switch_click('.switch', '0', 'left')
        cy.text_field('#security_company', vars.prevComp)
        cy.text_field('#business_type', vars.business)
        cy.text_field('#pay_rate', vars.pay)
        cy.text_field('#job_post_type', vars.postType)
        cy.text_field('#post_business', vars.postBusiness)
        cy.text_field('#post_area', vars.postArea)
        cy.switch_click('.switch', '1', 'left')
        cy.switch_click('.switch', '2', 'left')
        cy.switch_click('.switch', '3', 'left')
        cy.checkbox_eq('.dyn_check', '2')
        cy.checkbox_eq('.dyn_check', '4')
        cy.select_field('#referrer', vars.refer)
        // cy.switch_click('.switch', '4', 'left')
        cy.get('.switch')
            .contains('Full-Time')
            .click()
        cy.switch_click('.switch', '5', 'right')
        cy.upload('[type="file"]', 'staffwizard_com.pdf')
        cy.checkbox_eq('.dyn_check', '7')
        cy.pause()
        cy.wait(time)
        cy.btn_click_eq('.btn-submit', '1')
    }

    sInf() {
        cy.btn_click_eq('.btn-submit', '2')
    }

    applyDone() {
        cy.get('.modal-body')
            .eq(0)
        cy.btn_click_eq('.click_done', '0')
    }
}

export default apply;

