/// <reference types="Cypress" />

require('cypress-xpath');
require('cypress-plugin-tab')

import vars from '../../../../variables';
let instance = prompt('What instance it is?')
let enviroment = prompt('What enviroment is?')

class add_emp {
    login() {
        if(enviroment == 'staging'){
            enviroment = '.staffwizardstaging.com'
            vars.pass = '5678@s74ffw1z4rd'
        } else {
            if(enviroment == 'live'){
                enviroment = '.staffwizard.com'
                vars.pass = 's74ffw1z4rd@1234'
            } else {
                if(enviroment == 'dev'){
                    enviroment = '.staffwizarddev.com'
                    vars.pass = 's74ffw1z4rd@1234'
                } else {
                    alert('Error!')
                }
            }
        }
        cy.visit('https://' + instance + enviroment)
        cy.text_field('#name', 'superadmin')
        cy.text_field('#password', vars.pass)
        cy.get('#submit')
            .click()
        cy.visit('https://' + instance + enviroment + '/admin/employee/add/guard')
    }

    emp_forms() {
        cy.text_field('#f_name', vars.fName)
        cy.text_field('#m_name', vars.mName)
        cy.text_field('#l_name', vars.lName)
        cy.select_field('#country', vars.country)
        cy.text_field('#searchTextField', vars.address)
        cy.tab()
        cy.long_lat('#cityLat', vars.lat)
        cy.long_lat('#cityLong', vars.long)
        cy.text_field('#city_field', vars.city)
        if(vars.country == 'Jamaica'){
            cy.select_field('#cboStateJA', vars.state)
        } else {
            cy.select_field('#state_field', vars.state)
            cy.text_field('#zip', vars.zip)
        }
        // cy.get('#cityLat')
        //     .invoke('attr', 'type', 'show')
        // cy.get('#cityLong')
        //     .invoke('attr', 'type', 'show')
        cy.text_field('#phone_format', vars.phone)
        cy.text_field('#p_email', vars.email)
        cy.text_field('#dob', vars.dob)
        cy.tab()
        cy.select_field('select[name="ethnicity"]', 'Hispanic or Latino')
        cy.text_field('input[name = "social_security"]', vars.ssn)
        cy.select_field('select[name="select_id_type"]', 'Drivers License')
        cy.select_field('select[name="license_state"]', 'TX')
        cy.wait(500)
        cy.text_field('#driver_license', vars.cardNum)
        cy.select_field('#master_region_id', vars.region)
        cy.select_field('#branch', vars.branch)
        cy.select_field('#pay_type', vars.payType)
        cy.text_field('#base_pay', '1.00')
        cy.select_field('#status', vars.status)
        // cy.text_field('#tracktik_id', vars.payID)
        cy.text_field('input[name="hire_date"]', vars.hire)
        cy.tab()
        cy.text_field_force('input[name="joining_date"]', vars.join)
        // cy.text_field('input[name="ec_first_name"]', 'Emergency')
        // cy.text_field('input[name="ec_last_name"]', 'Contact')
        // cy.text_field('input[name="ec_phone_no"]', '6181552046')
        // cy.text_field('input[name="ec_relationship"]', 'known')
        cy.pause() 
        cy.btn_click('.btn-info', '0', 300)
    }
}

export default add_emp;