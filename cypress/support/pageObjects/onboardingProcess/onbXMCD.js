/// <reference types="Cypress" />

require('cypress-xpath');
require('cypress-plugin-tab')

import 'cypress-file-upload'
import vars from '../../../../variables'
let time = 300

class onbaording {
    login() {
        let onbPass = 'INyzbYJU'
        cy.visit('https://' + vars.instance + vars.enviroment + '/onboarding')
        cy.pause()
        cy.text_field('.email', vars.email)
        cy.text_field('.required[name="password"]', onbPass)
        cy.btn_click('.btn')
    }

    wel_vid() {
        cy.get('.page-header')
            .find('h2')
            .contains('Welcome Video')
            .should('be.visible')
            .then( function() {
                cy.btn_click('.paperwork-btn-submit')
            })
    }

    per_info() {
        cy.get('.page-header')
            .find('h2')
            .contains('Personal Information')
            .should('be.visible')
            .then( function() {
                cy.get('.staff-step')
                    .find('li')
                    .eq(0)
                    .invoke('attr', 'class')
                    .should('contains', 'current_page')
                    .then( function() {
                        cy.text_field('#phone', '6188282069')
                        cy.text_field('#ssn', vars.ssn)
                        cy.text_field('#birth_date', '01011989')
                        cy.tab()
                        cy.btn_click('.paperwork-btn-submit')
                    })
                
                })
    }

    license() {
        cy.get('.page-header')
            .find('h2')
            .contains('License(s)')
            .should('be.visible')
            .then( function() {
                cy.get('.staff-step')
                    .find('li')
                    .eq(1)
                    .invoke('attr', 'class')
                    .should('contains', 'current_page')
                    .then( function() {
                        cy.switch_click('.switch', '0', 'left')
                        cy.select_field('#unarmedLicenseSt', vars.state)
                        cy.text_field('#unarmedLicenseNum', '1111111111')
                        cy.text_field('#unarmedLicenseDt', '2050-01-01')
                        cy.tab()
                        cy.upload_eq('[type="file"]', 'DL_SpogeBob.png', '0')
                        cy.btn_click('.paperwork-btn-submit')
                })
                
            })
    }

    curr_add() {
        cy.get('.page-header')
            .find('h2')
            .contains('Current Address')
            .should('be.visible')
            .then( function() {
                cy.get('.staff-step')
                    .find('li')
                    .eq(2)
                    .invoke('attr', 'class')
                    .should('contains', 'current_page')
                    .then( function() {
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
                    })
                
                })
    }

    emergency() {
        cy.get('.page-header')
            .find('h2')
            .contains('Emergency Contact')
            .should('be.visible')
            .then( function() {
                cy.get('.staff-step')
                    .find('li')
                    .eq(1)
                    .invoke('attr', 'class')
                    .should('contains', 'current_page')
                    .then( function() {
                        cy.text_field('#first_name', 'Emergency')
                        cy.text_field('#last_name', 'Contact')
                        cy.text_field('#phone', '618-155-86-27')
                        cy.select_field('#relationship', 'Test')
                        cy.btn_click('.paperwork-btn-submit')
                    })
                
                })
    }

    skills() {
        cy.get('.page-header')
        .find('h2')
        .contains('Skills Verification')
        .should('be.visible')
        .then( function() {
            cy.wait(1000)
            cy.btn_click('.paperwork-btn-submit')
        })
    }

    // wotc_onb() {
    //     cy.get('.page-header')
    //         .find('h2')
    //         .contains('WOTC Screening')
    //         .should('be.visible')
    //         .then( function() {
    //             cy.btn_click_eq('[onclick="wotcLinkRegistration()"]', '0')
    //             cy.pause()
    //             cy.btn_click('.nextClass')
    //         })
    // }

    emp_inf() {
        cy.get('.page-header')
            .find('h2')
            .contains('Employment Information')
            .should('be.visible')
            .then( function() {
                cy.get('.staff-step')
                    .find('li')
                    .eq(0)
                    .invoke('attr', 'class')
                    .should('contains', 'current_page')
                    .then( function() {
                        cy.text_field('#datepicker', '06/01/2024')
                        cy.tab()
                        cy.select_field('#exampleFormControlSelect1', 'Full-Time')
                        cy.get('label[for="understand"]')
                            .click('left')
                        cy.btn_click('.paperwork-btn-submit')
                    })
                
                })
    }

    list() {
        cy.get('.page-header')
            .find('h2')
            .contains('List Present')
            .should('be.visible')
            .then( function() {
                cy.get('.staff-step')
                    .find('li')
                    .eq(1)
                    .invoke('attr', 'class')
                    .should('contains', 'current_page')
                    .then( function() {
                        cy.text_field('#company_name', vars.prevComp)
                        cy.text_field('#company_address', vars.postArea)
                        cy.text_field('#city1', vars.city)
                        cy.select_field('#state', vars.shState)
                        cy.text_field('#zipcode', vars.zip)
                        cy.select_field('#start', vars.dtStart)
                        cy.select_field('#end', vars.dtEnd)
                        cy.checkbox_eq('[dep-main="donot_contact_current_employeer_common"]', '0')
                        cy.btn_click('.paperwork-btn-submit')
                    })
                
                })
    }

    questionnaire() {
        cy.get('.page-header')
            .find('h2')
            .contains('Employment Questionnaire')
            .should('be.visible')
            .then( function() {
                cy.get('.staff-step')
                    .find('li')
                    .eq(2)
                    .invoke('attr', 'class')
                    .should('contains', 'current_page')
                    .then( function() {
                        cy.switch_click('.switch', '0', 'right')
                        cy.switch_click('.switch', '1', 'left')
                        cy.switch_click('.switch', '2', 'left')
                        cy.switch_click('.switch', '4', 'left')
                        cy.switch_click('.switch', '5', 'left')
                        cy.btn_click('.paperwork-btn-submit')
                        cy.wait(1000)
                    })
                
                })
    }

    military() {
        cy.get('.page-header')
            .find('h2')
            .contains('Military Service')
            .should('be.visible')
            .then( function() {
                cy.get('.staff-step')
                    .find('li')
                    .eq(0)
                    .invoke('attr', 'class')
                    .should('contains', 'current_page')
                    .then( function() {
                        cy.switch_click('.switch', '0', 'left')
                        cy.text_field('#milBranch', vars.city)
                        cy.text_field('#milRank', 'Major')
                        cy.select_field('#milDischarge', 'Honorable')
                        cy.text_field('#datepicker', '2007-01-01')
                        cy.tab()
                        cy.upload('[type="file"]', 'staffwizard_com.pdf')
                        cy.btn_click_force('#radio2')
                        cy.btn_click('.paperwork-btn-submit')
                    })
                
                })
    }

    minimum() {
        cy.get('.page-header')
            .find('h2')
            .contains('Minimum Requirements')
            .should('be.visible')
            .then( function() {
                cy.checkbox_eq('.custom-checkbox', '0')
                cy.btn_click('.paperwork-btn-submit-next')
            })
    }

    benefits() {
        cy.get('.page-header')
            .find('h2')
            .contains('Benefits')
            .should('be.visible')
            .then( function() {
                cy.btn_click('.paperwork-btn-submit')
            })
    }

    pre_emp() {
        cy.get('.page-header')
            .find('h2')
            .contains('Employment Information')
            .should('be.visible')
            .then( function() {
                cy.get('.staff-step')
                    .find('li')
                    .eq(0)
                    .invoke('attr', 'class')
                    .should('contains', 'current_page')
                    .then( function() {
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
                    })
                })
    }

    profile() {
        cy.get('.page-header')
        .find('h2')
        .contains('Profile Picture')
        .should('be.visible')
        .then( function() {
            cy.get('.staff-step')
                .find('li')
                .eq(1)
                .invoke('attr', 'class')
                .should('contains', 'current_page')
                .then( function() {
                    cy.btn_click('.paperwork-btn-submit')
                })
            })    
    }

    pre_emp_ques() {
        cy.get('.page-header')
        .find('h2')
        .contains('Employment Questionnaire')
        .should('be.visible')
        .then( function() {
            cy.get('.staff-step')
                .find('li')
                .eq(2)
                .invoke('attr', 'class')
                .should('contains', 'current_page')
                .then( function() {
                    cy.switch_click('.switch', '0', 'right')
                    cy.switch_click('.switch', '1', 'right')
                    cy.btn_click('.paperwork-btn-submit')
                })
            })
    }

    drug_test() {
        cy.get('.page-header')
            .find('h2')
            .contains('Drug Test')
            .should('be.visible')
            .then( function() {
                cy.upload_eq('[type="file"]', 'diamond_dogs.jpg', '0')
                cy.btn_click_eq('.paperwork-btn-submit', '1')
            })
    }

    paycard() {
        cy.get('.page-header')
            .find('h2')
            .contains('PayCard Detail')
            .should('be.visible')
            .then( function() {
                // cy.switch_click('.switch', '0', 'left')
                // cy.text_field('#paycardNumber', vars.cardNum)
                // cy.text_field('#confirmPaycardNumber', vars.cardNum)
                // cy.text_field('#card_expiry_date', '01/01/2030')
                // cy.tab()
                // cy.switch_click('.switch', '1', 'left')
                cy.pause()
                cy.btn_click('.paperwork-btn-submit')
            })
    }

    uniform() {
        cy.get('.page-header')
            .find('h2')
            .contains('Uniform Training')
            .should('be.visible')
            .then( function() {
                cy.get('video[controlslist="nodownload"]')
                    .should('be.visible')
                cy.btn_click('.paperwork-btn-submit')
            })
    }

    download() {
        cy.get('.page-header')
            .find('h2')
            .contains('Download App')
            .should('be.visible')
            .then( function() {
                cy.select_field('#exampleFormControlSelect1', 'Android')
                cy.text_field('.send_on_mobile', vars.phone)
                cy.btn_click('.paperwork-btn-submit')
            })
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

    onbDone() {
        cy.get('.modal-body')
            .find('img[alt="correction"]')
            .should('be.visible')
            .then( function() {
                cy.btn_click('.all_steps_done')
            })
    }
}

export default onbaording;