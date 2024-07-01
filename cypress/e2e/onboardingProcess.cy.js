/// <reference types="Cypress" />

import vars from '../../variables';

// import apply from '../support/pageObjects/onboardingProcess/applyStagingATZS';
import apply from '../support/pageObjects/onboardingProcess/applyLiveATZS';
// import apply from '../support/pageObjects/onboardingProcess/applyDEMO';
// import onboarding from '../support/pageObjects/onboardingProcess/onbStagingATZS';
import onboarding from '../support/pageObjects/onboardingProcess/onbLiveATZS';

describe('Onboarding Process Automation', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    const app = new apply();
    const onb = new onboarding();
    let time = 1500

    vars.instance = prompt('What instance it is?')
    vars.enviroment = prompt('What enviroment it is?')
        if(vars.enviroment == 'staging') {
            vars.enviroment = '.staffwizardstaging.com'
        } else {
            if(vars.enviroment == 'live'){
                vars.enviroment = '.staffwizard.com'
            } else {
                if(vars.enviroment == 'dev'){
                    vars.enviroment = '.staffwizarddev.com'
                } else {
                    alert('Error!')
                }
            }
        }

    it.only('New Applicant forms', function() {
        app.applicant()
        cy.wait(time)
        app.pInf()
        cy.wait(time)
        app.eInf()
        cy.wait(time)
        app.sInf()
        cy.wait(time)
        app.applyDone()
        cy.wait(time)
        cy.pause()
    })

    it('Onboarding Forms', function() {
        onb.login()
        cy.wait(time)
        onb.wel_vid()
        cy.wait(time)
        onb.per_info()
        cy.wait(time)
        onb.license()
        cy.wait(time)
        onb.curr_add()
        cy.wait(time)
        onb.emergency()
        cy.wait(time)
        onb.skills()
        cy.wait(time)
        // onb.wotc_onb()
        // cy.wait(time)
        onb.emp_inf()
        cy.wait(time)
        onb.list()
        cy.wait(time)
        onb.questionnaire()
        cy.wait(time)
        onb.military()
        cy.wait(time)
        onb.minimum()
        cy.wait(time)
        onb.benefits()
        cy.wait(time)
        onb.pre_emp()
        cy.wait(time)
        cy.wait(500)
        onb.profile()
        cy.wait(time)
        onb.pre_emp_ques()
        cy.wait(time)
        // onb.drug_test()
        // cy.wait(time)
        onb.paycard()
        cy.wait(time)
        onb.uniform()
        cy.wait(time)
        onb.download()
        cy.wait(time)
        onb.consent()
        cy.wait(time)
        onb.agreement()
        cy.wait(time)
    })
})