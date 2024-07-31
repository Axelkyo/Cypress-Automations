/// <reference types="Cypress" />

require('cypress-xpath');
require('cypress-plugin-tab')

import vars from '../../../../variables';
// let instance = prompt('What instance it is?')
// let enviroment = prompt('What enviroment is?')

class add_client {
    login() {
        // if(enviroment == 'staging'){
        //     enviroment = '.staffwizardstaging.com'
        //     vars.pass = '5678@s74ffw1z4rd'
        // } else {
        //     if(enviroment == 'live'){
        //         enviroment = '.staffwizard.com'
        //         vars.pass = 's74ffw1z4rd@1234'
        //     } else {
        //         alert('ERROR')
        //     }
        // }
        cy.visit('https://' + vars.instance + vars.enviroment)
        cy.text_field('#name', 'superadmin')
        cy.text_field('#password', vars.pass)
        cy.pause()
        cy.get('#submit')
            .click()
        cy.visit('https://' + vars.instance + vars.enviroment + '/admin/accounts/add')
    }

    client_forms() {
    cy.text_field('#name', vars.compName)
    cy.select_field('#country', vars.country)
    cy.text_field('#searchTextField', vars.address)
        .tab()
    cy.long_lat('#cityLat', vars.lat)
    cy.long_lat('#cityLong', vars.long)
    if(vars.country == 'Jamaica'){
        cy.select_field('#cbostateja', vars.state)
    } else {
        cy.text_field('#apt_numbers', 'P.O. Box 100870')
        cy.select_field('#cbostate', vars.state)
        cy.text_field('#zip', vars.zip)
        cy.text_field('#city', vars.city)
    }
    cy.text_field('#account_primary_number', vars.phone)
    cy.select_field('#master_region_id', vars.region)
    cy.select_field('#master_branch_id', vars.branch)
    cy.text_field('#primary_name', vars.primName)
    cy.text_field('#primary_email', vars.primEmail)
    cy.text_field_find('.ch-account-user-row', 'input[name="other_post_location_name[]"]', vars.postName)
    cy.select_field('select[name="country_pl[]"]', vars.country)
    cy.text_field_find('.ch-account-user-row', 'input[name="post_location_address[]"]', vars.address)
        .tab()
    cy.long_lat('.a-p-lat', vars.lat)
    cy.long_lat('.a-p-long', vars.long)
    if(vars.country == 'Jamaica'){
        cy.select_field_eq('select[name="post_location_state[]"]', 3, vars.state)
    } else {
        cy.select_field_eq('select[name="post_location_state[]"]', 0, vars.state)
        cy.text_field('input[name="post_location_city[]"]', vars.city)
        cy.text_field_eq('.post_location_zip', 1, vars.zip)
    }
    cy.btn_click_eq('.is_armed_post', 3, 300 )  
    cy.text_field_eq('.unarmed_bill_rate', 1, vars.pay)
    cy.text_field_eq('.minimum_pay_rate', 1, vars.bill)
    cy.select_field('select[name="postlocation_status[]"]', 'Active')
    cy.pause()
    cy.btn_click('.btn[value="Add Account"]')
    }
}

export default add_client;