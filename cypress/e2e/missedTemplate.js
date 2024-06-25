// cy.get(`tr[data-itemdescription="${lName}, ${fName}"]`)
        //     .invoke('attr', 'data-itemdescription')
        //     .then( function(val) {
        //         attrValue = val
        //         cy.log(attrValue)
        //         if(attrValue == `${lName}, ${fName}`) {
        //             cy.get(`tr[data-itemdescription="${lName}, ${fName}"]`)
        //                 .click()
        //             cy.get('.save-btn')
        //                 .click()
        //         } else {
        //             cy.get('.card')
        //                 .eq(0)
        //                 .find('.bg-lighter')
        //                 .find('.fa-times-circle')
        //                 .click()
        //             }
        //     })
        // code before costruct the if
        // cy.pause()


        cy.select_field_eq('.account_cate_id', '0', 'Destruction')
    cy.select_field_eq('.account_title_id', '0', 'Darkness')
    // cy.get('.account_title_id')
    //     .each(function($title) {
    //         cy.log($title.text())
    //     })
    //     .eq(0)
    //     .click()


    
//     cy.get('.okCancelInMulti')
//         .find('li.opt')
//         .contains('Cypress.io')
//         .click()
//     cy.get('.account_skill_id')
//         .click()
//     cy.get('.okCancelInMulti')
//         .find('li.opt')
//         .contains('Cypress.io')
//         .click()
//     cy.get('.btnOk')
//         .click()
//     cy.get('.account_certificate_id')
//         .click()
//     cy.get('.okCancelInMulti')
//         .find('li.opt')
//         .contains('Armed')
//         .click()