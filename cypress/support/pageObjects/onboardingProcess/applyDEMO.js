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
        .eq(7)
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
        cy.select_field('#state', vars.shState)
        cy.select_field('#maritalStatus', vars.marital)
        cy.text_field('#ssn', vars.ssn)
        cy.switch_click('.switch', '0', 'right')
        cy.switch_click('.switch', '1', 'right')
        cy.switch_click('.switch', '2', 'left')
        for(let x=0; x<=6; x++) {
            cy.get('.fld_3')
            .eq(0)
            .find('.dyn_check')
            .eq(x)
            .click('left')
            .wait(250)
        }
        for(let x=0; x<=6; x++) {
            cy.get('.fld_4')
            .eq(1)
            .find('.dyn_check')
            .eq(x)
            .click('left')
            .wait(250)
        }
        cy.select_field('#fld_5', 'Other')
        cy.text_field('#fld_6', 'QA Tester')
        cy.wait(time)
        cy.btn_click_eq('.btn-submit', '0')
    }

    eInf() {
        // 02. Employemnt Information
        cy.switch_click('.switch', '3', 'left')
        cy.text_field('#security_company', vars.prevComp)
        cy.text_field('#business_type', vars.business)
        cy.text_field('#pay_rate', vars.pay)
        cy.text_field('#job_post_type', vars.postType)
        cy.text_field('#post_business', vars.postBusiness)
        cy.text_field('#post_area', vars.postArea)
        cy.switch_click('.switch', '4', 'left')
        cy.switch_click('.switch', '5', 'left')
        cy.switch_click('.switch', '6', 'left')
        cy.select_field('#referrer', vars.refer)
        cy.get('.switch')
            .eq(7)
            .contains('Full-Time')
            .click()
        cy.switch_click('.switch', '8', 'right')
        cy.switch_click('.switch', '9', 'left')
        cy.switch_click('.switch', '10', 'left')
        cy.switch_click('.switch', '11', 'right')
        cy.switch_click('.switch', '12', 'right')
        // cy.text_field('#ssn', 'Reference One')
        // cy.text_field_eq('input[name="fld_1"]', '0', 'Reference One Company')
        // cy.text_field_eq('input[name="phone"]', '0', '618-155-8627')
        // cy.text_field_eq('input[name="fld_1"]', '1', 'Reference Two')
        // cy.text_field_eq('input[name="fld_2"]', '0', 'Reference One Company')
        // cy.text_field_eq('input[name="phone"]', '1', '618-134-2045')
        cy.wait(time)
        cy.btn_click_eq('.btn-submit', '1')
    }

    sInf() {
        cy.get('#skills')
            .invoke('attr', 'class')
            .should('contains', 'active')
            .then( function() {
                cy.get('.form-card')
                    .find('h4')
                    .contains('Skills Information')
                    .should('be.visible')
                    .then( function() {
                        cy.switch_click('.switch', '6', 'left')
                        cy.switch_click('.switch', '7', 'left')
                        cy.switch_click('.switch', '8', 'left')
                        cy.switch_click('.switch', '9', 'left')
                        cy.switch_click('.switch', '10', 'right')
                        cy.switch_click('.switch', '11', 'left')
                        cy.switch_click('.switch', '12', 'left')
                        cy.switch_click('.switch', '13', 'right')
                        cy.switch_click('.switch', '14', 'right')
                        cy.btn_click_eq('.btn-submit', '2')
                    })
            })
    }

    applyDone() {
        cy.get('.modal-body')
            .eq(0)
        cy.btn_click_eq('.click_done', '0')
    }
}

export default apply;

