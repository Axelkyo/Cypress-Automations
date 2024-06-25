/// <reference types="Cypress" />

require('cypress-xpath');
require('cypress-plugin-tab')

import 'cypress-file-upload'
import vars from '../../../../variables';
let time = 300

class onbaording {
    login() {
        vars.pass = '1313' // prompt('Onboarding Password: ')// 9kPFsehp
        cy.visit('https://' + vars.instance + vars.enviroment + '/onboarding')
        cy.text_field('.email', vars.email)
        cy.text_field('.required[name="password"]', vars.pass)
        cy.btn_click('.btn')
    }

    wel_vid() {
        cy.btn_click('.paperwork-btn-submit')
        cy.wait(time)
    }

    per_info() {
        cy.text_field('#phone', '6188282069')
        cy.text_field('#birth_date', '01011989')
        cy.tab()
        cy.btn_click('.paperwork-btn-submit')
    }

    license() {
        cy.switch_click('.switch', '0', 'left')
        cy.select_field('#unarmedLicenseSt', vars.state)
        cy.text_field('#unarmedLicenseNum', '1111111111')
        cy.text_field('#unarmedLicenseDt', '2050-01-01')
        cy.tab()
        cy.upload_eq('[type="file"]', 'DL_SpogeBob.png', '0')
        cy.btn_click('.paperwork-btn-submit')
    }

    curr_add() {
        cy.text_field_eq('#address2', '0', 'Address 2')
        cy.select_field('#state', vars.shState)
        // cy.btn_click('#btn_add_more_posts')
        // cy.text_field_xpath('/html/body/div[1]/div[5]/div/div[2]/form/div[1]/div[3]/div[1]/div[1]/div/input', 'Main Street Bellevue', time)
        // cy.text_field_xpath('/html/body/div[1]/div[5]/div/div[2]/form/div[1]/div[3]/div[1]/div[2]/div/input', 'Prev Address 2', time)
        // cy.text_field_xpath('/html/body/div[1]/div[5]/div/div[2]/form/div[1]/div[3]/div[1]/div[3]/div/input', 'Bellevue', time)
        // cy.select_field_xpath('/html/body/div[1]/div[5]/div/div[2]/form/div[1]/div[3]/div[1]/div[4]/div/select', 'WA')
        // cy.text_field_xpath('/html/body/div[1]/div[5]/div/div[2]/form/div[1]/div[3]/div[1]/div[5]/div/input', '98004', time)
        // cy.select_field_xpath('/html/body/div[1]/div[5]/div/div[2]/form/div[1]/div[3]/div[1]/div[6]/div/select', '2020')
        cy.btn_click('.paperwork-btn-submit')
    }

    emergency() {
        cy.text_field('#first_name', 'Emergency')
        cy.text_field('#last_name', 'Contact')
        cy.text_field('#phone', '618-155-86-27')
        cy.select_field('#relationship', 'Married')
        cy.btn_click('.paperwork-btn-submit')
    }

    // wotc_onb() {
    //     cy.btn_click_eq('[onclick="wotcLinkRegistration()"]', '0')
    //     cy.wait(4000)
    //     // cy.btn_click_xpath('/html/body/form/div[4]/div[6]/div/input')
    //     cy.get('#wotcFrame')
    //         .find('#MainContent_btnNext')
    //         .click({force: true})
    // }

    emp_inf() {
        cy.text_field('#datepicker', '06/01/2024')
        cy.tab()
        cy.select_field('#exampleFormControlSelect1', 'Full-Time')
        cy.get('label[for="understand"]')
            .click('left')
        cy.btn_click('.paperwork-btn-submit')
    }

    list() {
        cy.text_field('#company_name', vars.prevComp)
        cy.text_field('#company_address', vars.postArea)
        cy.text_field('#city1', vars.city)
        cy.select_field('#state', vars.shState)
        cy.text_field('#zipcode', vars.zip)
        cy.select_field('#start', vars.dtStart)
        cy.select_field('#end', vars.dtEnd)
        cy.checkbox_eq('[dep-main="donot_contact_current_employeer_common"]', '0')
        cy.btn_click('.paperwork-btn-submit')
    }

    questionnaire() {
        cy.switch_click('.switch', '0', 'left')
        cy.switch_click('.switch', '1', 'left')
        cy.switch_click('.switch', '2', 'left')
        cy.switch_click('.switch', '4', 'left')
        cy.switch_click('.switch', '5', 'left')
        cy.btn_click('.paperwork-btn-submit')
        cy.wait(1000)
    }

    military() {
        cy.get('.staff-step')
            .find('li')
            .eq(3)
            .invoke('attr', 'class')
            .should('contains', 'active')
            .then( function() {
                cy.switch_click('.switch', '0', 'left')
            })
        cy.text_field('#milBranch', vars.city)
        cy.text_field('#milRank', 'Major')
        cy.select_field('#milDischarge', 'Honorable')
        cy.text_field('#datepicker', '2007-01-01')
        cy.tab()
        cy.upload('[type="file"]', 'staffwizard_com.pdf')
        cy.btn_click_force('#radio2')
        cy.btn_click('.paperwork-btn-submit')
    }

    minimum() {
        cy.checkbox_eq('.custom-checkbox', '0')
        cy.btn_click('.paperwork-btn-submit-next')
    }

    benefits() {
        cy.btn_click('.paperwork-btn-submit')
    }

    pre_emp() {
        cy.btn_click('.training_move_next')
        cy.select_field('#birth_state', vars.shState)
        cy.select_field('#birth_country', 'USA')
        cy.text_field('#birth_city', vars.city)
        cy.select_field('#eye_color', 'Black')
        cy.select_field('#hair_color', 'Black')
        cy.select_field('#gender', 'Male')
        cy.select_field('#pronoun', 'He/Him')
        cy.select_field('#height1', '6')
        cy.select_field('#height2', '11')
        cy.text_field('#weight', '35')
        cy.select_field('#ethnicity', 'Hispanic or Latino')
        cy.upload_eq('[type="file"]', 'Social Security Card.png', '0')
        cy.upload_eq('[type="file"]', 'DL_SpogeBob.png', '1')
        cy.btn_click('.paperwork-btn-submit')
    }

    profile() {
        cy.get('.staff-step')
            .find('li')
            .eq(1)
            .invoke('attr', 'class')
            .should('contains', 'active')
            .then( function() {
                cy.btn_click('.paperwork-btn-submit')
            })       
    }

    pre_emp_ques() {
        cy.switch_click('.switch', '0', 'right')
        cy.switch_click('.switch', '1', 'right')
        cy.btn_click('.paperwork-btn-submit')
    }

    paycard() {
        cy.get('.staff-step')
            .find('li')
            .eq(2)
            .invoke('attr', 'class')
            .should('contains', 'active')
            .then( function() {
                cy.switch_click('.switch', '0', 'left')
            })
        cy.pause()
        cy.text_field('#paycardNumber', vars.cardNum)
        cy.text_field('#confirmPaycardNumber', vars.cardNum)
        cy.text_field('#card_expiry_date', '01/01/2030')
        cy.tab()
        cy.switch_click('.switch', '1', 'left')
        cy.btn_click('.paperwork-btn-submit')
    }

    consent() {
        cy.pause()
        cy.btn_click('.btn-primary[onclick="return submitDocument()"]')        
    }

    agreement() {
        cy.switch_click('.custom-checkbox', '0', 'left')
        cy.btn_click('.paperwork-btn-submit')
        cy.get('.response_success')
            .invoke('text')
            .should('contains', 'Employeement agreement step updated successfully.')
            .then( function() {
                cy.get('.final_step_submission')
                    .click()
            })
        cy.get('.modal-body')
            .find('img[alt="correction"]')
            .should('be.visible')
            .then( function() {
                cy.btn_click('.all_steps_done')
            })
    }
}

export default onbaording;