/// <reference types="Cypress" />

require('cypress-xpath');
require('cypress-plugin-tab')

import vars from '../../../../variables';
// vars.instance = prompt('What instance it is?')
// vars.enviroment = prompt('What enviroment is?')
// vars.branch = prompt('What branch do you want to use?')
// vars.schdlWeek = prompt('Date for the Start day od the week?')

class create_schdl {
    login() {
        if(vars.enviroment == 'staging'){
            vars.enviroment = '.staffwizardstaging.com'
            vars.pass = '5678@s74ffw1z4rd'
        } else {
            if(vars.enviroment == 'live'){
                vars.enviroment = '.staffwizard.com'
                vars.pass = 's74ffw1z4rd@1234'
            } else {
                if(vars.enviroment == 'dev'){
                    vars.enviroment = '.staffwizarddev.com'
                    vars.pass = 's74ffw1z4rd@1234'
                } else {
                alert('Error')
                }
            }
        }
        cy.visit('https://' + vars.instance + vars.enviroment)
        cy.text_field('#name', 'superadmin')
        cy.text_field('#password', vars.pass)
        cy.get('#submit')
            .click()
    }

    select_schdl() {
        cy.visit('https://' + vars.instance + vars.enviroment + '/admin/ScheduleV2')
        cy.select_field('#search_branch', vars.branch)
    }

    create_shifts() {
        cy.get('.empty-shift[data-post-location-id="2066"][data-date-for-shift="2024-05-20"]')
            .wait(500)
            .dblclick()
        cy.checkbox('#modelAll')
        cy.text_field('#input_modal_start_time', '0000')
        cy.text_field('input[name="modal_end_time"]', '1300')
        cy.btn_click('#save_shift')
    }

    create_shifts_ot() {
        cy.get('.empty-shift[data-post-location-id="2066"][data-date-for-shift="2024-05-20"]')
            .wait(500)
            .dblclick()
        cy.checkbox('#modelAll')
        cy.text_field('#input_modal_start_time', '0000')
        cy.text_field('input[name="modal_end_time"]', '1300')
        cy.checkbox('#billable_ot')
        cy.btn_click('#save_shift')
        cy.wait(1000)
    }

    create_shifts_ot_job() {
        cy.get('.empty-shift[data-job-id="2066"][data-date-for-shift="2024-05-20"]')
            .wait(500)
            .dblclick()
        cy.checkbox('#modelAll')
        cy.text_field('#input_modal_start_time', '0000')
        cy.text_field('input[name="modal_end_time"]', '1300')
        cy.checkbox('#billable_ot')
        cy.btn_click('#save_shift')
        cy.wait(1000)
    }
    create_shifts_dif_jobs(z) {
        cy.get(`.empty-shift[data-job-id="${z}"][data-date-for-shift="2024-05-20"]`)
            .wait(500)
            .dblclick()
        cy.checkbox('#modelAll')
        cy.text_field('#input_modal_start_time', '0000')
        cy.text_field('input[name="modal_end_time"]', '1300')
        cy.checkbox('#billable_ot')
        cy.btn_click('#save_shift')
        cy.wait(1000)
    }

    create_shifts_brks_dif_jobs(z) {
        cy.get(`.empty-shift[data-job-id="${z}"][data-date-for-shift="2024-05-20"]`)
            .wait(500)
            .dblclick()
        cy.checkbox('#modelAll')
        cy.text_field('#input_modal_start_time', '0000')
        cy.text_field('input[name="modal_end_time"]', '1315')
        cy.checkbox('#billable_ot')
        let brkType
        let brkStart
        for(let x = 1; x<=4; x++) {
            switch(x){
                case 1:
                    brkType = 'None';
                    brkStart = '0100';
                    break;
                case 2:
                    brkType = 'Paid';
                    brkStart = '0200';
                    break;
                case 3:
                    brkType = 'Billed';
                    brkStart = '0300';
                    break;
                case 4:
                    brkType = 'Both';
                    brkStart = '0400';
                    break;
                default:
                    cy.log('Error in Switch Case');
            }
            cy.btn_click('.add-break-btn')
            cy.get('#breaks_table')
                .find('.break_duration')
                .eq(x-1)
                .type('15')
            cy.get('#breaks_table')
                .find('.break_shift_type')
                .eq(x-1)
                .select(brkType)
            cy.get('#breaks_table')
                .find('.break_clock_type')
                .eq(x-1)
                .select('Meal')
            cy.get('#breaks_table')
                .find('.break_start_time')
                .eq(x-1)
                .invoke('val', brkStart)
                .click()
            cy.wait(500)
        }
        cy.btn_click('#save_shift')
        cy.wait(1000)
    }

    assign_shifts() {
        cy.reload()
        cy.get('.open-shift[data-post-location-id="2066"][data-date="2024-05-20"]')
            .click()
            .wait(500)
            .then( function() {
                let x = 20
                for(x; x<=26; x++) {
                    cy.click_ctrl(`.open-shift[data-post-location-id="2066"][data-date="2024-05-${x}"]`)
                    cy.wait(250)
                }
                cy.get('#modal-employee-list')
                .find('.content-employees')
                .find('.emp-name')
                .eq(0)
                .invoke('text')
                .then( function($empID) {
                    cy.log($empID)
                    cy.get('.emp-name')
                        .contains($empID)
                        .click()
                    cy.wait(2000)
                    cy.reload()
                })
            })
    }

    assign_shifts_job() {
        cy.reload()
        cy.get('.open-shift[data-job-id="2066"][data-date="2024-05-20"]')
            .click()
            .wait(500)
            .then( function() {
                let x = 20
                for(x; x<=26; x++) {
                    cy.click_ctrl(`.open-shift[data-job-id="2066"][data-date="2024-05-${x}"]`)
                    cy.wait(250)
                }
                cy.get('#modal-employee-list')
                .find('.content-employees')
                .find('.emp-name')
                .eq(0)
                .invoke('text')
                .then( function($empID) {
                    cy.log($empID)
                    cy.get('.emp-name')
                        .contains($empID)
                        .click()
                    cy.wait(2000)
                    cy.reload()
                })
            })
    }

    assign_shifts_dif_jobs(y) {
        cy.reload()
        cy.get(`.open-shift[data-job-id="${y}"][data-date="2024-05-20"]`)
            .click()
            .wait(500)
            .then( function() {
                let x = 20
                for(x; x<=26; x++) {
                    cy.click_ctrl(`.open-shift[data-job-id="${y}"][data-date="2024-05-${x}"]`)
                    cy.wait(250)
                }
                cy.get('#modal-employee-list')
                .find('.content-employees')
                .find('.emp-name')
                .eq(0)
                .invoke('text')
                .then( function($empID) {
                    cy.log($empID)
                    cy.get('.emp-name')
                        .contains($empID)
                        .click()
                    cy.wait(2000)
                    cy.reload()
                })
            })
    }

    inv() {
        cy.visit('https://' + vars.instance + vars.enviroment + '/admin/invoices#not-approved-invoice')
        cy.select_field('#not_approved_branch_id', 'NoCal')
        cy.get('.account_dropdown_client')
            .click()
        cy.wait(500)
        cy.get('.dropdown-menu.active')
            .find('li')
            .contains('Generate Invoices Branch/Period')
            .click()
        cy.get('.modal-dialog')
            .find('#selectedBranchMass')
            .select(vars.branch)
        cy.get('.modal-dialog')
            .find('#selectedPeriod')
            .select('Weekly')
        cy.get('.modal-dialog')
            .find('#schedule_start_datepicker_mass')
            .type('05-20-2024')
            .tab()
        cy.get('.modal-dialog')
            .find('.btn-success')
            .contains('Generate Invoices')
            .click()
        cy.get('#not-approved-invoices_datatable')
            .find('tr.odd')
            .find('td')
            .contains('INVONO')
            .click()
    }
    expected() {
        
    }
}

export default create_schdl;

// describe('Scheduler Automation', function() {

//     Cypress.on('uncaught:exception', (err, runnable) => {
//         // returning false here prevents Cypress from
//         // failing the test
//         return false
//     })

//     it('Atomating The New Scheedule View', function() {
//         cy.visit(mainVar.url + mainVar.staging)
//         cy.pause()
//         cy.get('#name')
//             .type('superadmin')
//         cy.get('#password')
//             .type(mainVar.sgPass)
//         cy.get('#submit')
//             .click()
//         cy.visit(mainVar.url + mainVar.staging + '/admin/ScheduleV2')
//         cy.get('#search_branch')
//             .select(mainVar.branch)
//         cy.pause()
        
//         // Initial Variables
//         let date_shift = '2024-02-19';
//         let brk_dur = '15';
//         let x = 0;
//         // Schedule creation
//         for(x = 0; x<=3; x++) {
//             cy.wait(1000)
//             cy.get(`.empty-shift[data-date-for-shift="${date_shift}"]`)
//                 .eq(0)
//                 .dblclick()
//             cy.get('.shift-modal-content')
//                 .find('#input_modal_start_time')
//                 .type('{selectAll}{del}0000{enter}')
//             cy.get('[name="modal_end_time"]')
//                 .type('{selectAll}{del}1300{enter}')
//             cy.get('.add-break-btn')
//                 .click()
//             cy.get('#break_duration')
//                 .type(brk_dur)
//             cy.get('.break_shift_type')
//                 .select('None')
//             // cy.select('.break_start_time')
//             //     .click()
//             // Cypress._.times(3, function(){
//             //     cy.get('.add-break-btn')
//             //         .click()
//             // })
//             cy.wait(500)
//             cy.get('.btn-primary')
//                 .each( $btn => {
//                     cy.log($btn.text())
//                 } )
//                 .contains('Save Shift')
//                 .click()
//             // cy.reload()
//             cy.wait(500)

//             // Assigning the shift to an employee
//             cy.get('.open-shift')
//                 .click()
//             cy.get('#modal-employee-list')
//                 .find('.card-content')
//                 .find('.content-employees')
//                 .find('.emp-name')
//                 .eq(0)
//                 .click()
//             cy.wait(500)
//             cy.reload()

//             if(x <= 3 && date_shift == '2024-02-19'){
                
//                 x = 0;
//                 brk_dur = '20';
//                 date_shift = '2024-02-20';
//             }
//             else if(x <= 3 && date_shift == '2024-02-20'){
//                 x = 0;
//                 date_shift = '2024-02-21'
//             }
//             else if(x <= 3 && date_shift == '2024-02-21'){
//                 x = 0;
//                 date_shift = '2024-02-22'
//             }
//             else if(x <= 3 && date_shift == '2024-02-22'){
//                 x = 0;
//                 date_shift = '2024-02-23'
//             }
//             else if(x <= 3 && date_shift == '2024-02-23'){
//                 x = 0;
//                 date_shift = '2024-02-24'
//             }
//             else if(x <= 3 && date_shift == '2024-02-24'){
//                 x = 0;
//                 date_shift = '2024-02-25'
//             }
//             else if(x <= 3 && date_shift == '2024-02-25'){
//                 x = 4;
//             }
//         }
//     })

// })