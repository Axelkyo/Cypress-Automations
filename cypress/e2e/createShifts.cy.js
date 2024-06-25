/// <reference types="Cypress" />

import create_schdl from '../support/pageObjects/schedulerV2/schedulePO';
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')
let time = 1000
let z = '2065'

describe('Create Shifts in the Schedule', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    const schdl = new create_schdl();

    it('Create Shifts', function() {
        schdl.login()
        schdl.select_schdl()
        cy.pause()
        Cypress._.times(3, function() {
            schdl.create_shifts()
            cy.wait(time)
            schdl.assign_shifts()
            cy.wait(time)
        })
        schdl.inv()
    })

    it('Create Shifts Billable OT', function() {
        schdl.login()
        cy.wait(500)
        schdl.select_schdl()
        cy.pause()
        Cypress._.times(3, function() {
            schdl.create_shifts_ot()
            cy.wait(time)
            schdl.assign_shifts()
            cy.wait(time)
        })
        schdl.inv()
    })

    it('Create Shifts On A Post Job', function() {
            schdl.login()
            cy.wait(500)
            schdl.select_schdl()
            cy.pause()
            Cypress._.times(3, function() {
                schdl.create_shifts_ot_job()
                cy.wait(time)
                schdl.assign_shifts_job()
                cy.wait(time)
            })
            schdl.inv()
    })

    it('Create Shifts On Different Post Jobs', function() {
        schdl.login()
        cy.wait(500)
        schdl.select_schdl()
        cy.pause()
        for(let y=0; y<=2; y++){
            if(y == 0){
                cy.log('Valor de y: ' + y)
                schdl.create_shifts_dif_jobs(z)
                schdl.assign_shifts_dif_jobs(z)
                z = '2066'
            } else {
                if(y == 1){
                    cy.log('Valor de y: ' + y)
                    schdl.create_shifts_dif_jobs(z)
                    schdl.assign_shifts_dif_jobs(z)
                    z = '2067'
                } else {
                    schdl.create_shifts_dif_jobs(z)
                    schdl.assign_shifts_dif_jobs(z)
                }
            }
        }
        schdl.inv()
    })

    it.only('Create Shifts With Breaks On Different Post Jobs', function() {
        schdl.login()
        cy.wait(500)
        schdl.select_schdl()
        cy.pause()
        for(let y=0; y<=2; y++){
            if(y == 0){
                cy.log('Valor de y: ' + y)
                schdl.create_shifts_brks_dif_jobs(z)
                schdl.assign_shifts_dif_jobs(z)
                z = '2066'
            } else {
                if(y == 1){
                    cy.log('Valor de y: ' + y)
                    schdl.create_shifts_brks_dif_jobs(z)
                    schdl.assign_shifts_dif_jobs(z)
                    z = '2067'
                } else {
                    schdl.create_shifts_brks_dif_jobs(z)
                    schdl.assign_shifts_dif_jobs(z)
                }
            }
        }
        schdl.inv()
    })
})