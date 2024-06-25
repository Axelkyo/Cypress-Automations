require('cypress-xpath');
require('cypress-plugin-tab')

class createChecks {

    loginVroll() {
        let t = 300
        cy.visit('https://vgroll.com/', { failOnStatusCode: false })
        cy.pause()
        cy.text_field('#username', 'payrolladmin@jurneyassociates')
        cy.text_field('#password', 'Bd6p0FkR')
        cy.btn_click('button[type="submit"]', '0', t)
    }

    payrollChecks() {
        let t = 300
        cy.nav_tab('.nav-link', 'Payrolls', t)
        cy.nav_tab('.nav-link', 'All Payrolls', t)
        cy.wait(2000)
        // cy.pause()
        // Change the item id in every PDF file
        cy.get('tr[data-itemid="28393"]')
            .find('.btn-group')
            .eq(0)
            .click()
        // cy.nav_tab('.dropdown-item', 'Payroll Checks', t)
        cy.get('.dropdown-menu')
            .find('a[data-title="Payroll Checks"]')
            .each( function($payroll) {
                cy.log($payroll.text())
            })
            .eq(4)
            // .contains('Payroll Checks')
            .click()
    }

    selEmp(selector, fName, lName, t) {
        cy.get('.btn-success')
            .eq(5)
            .click()
        cy.get('button[data-btn-type="select"]')
            .click()
        cy.wait(300)
        cy.btn_click_xpath(selector, t)
        cy.get('input[name="firstName"]')
            .eq(0)
            .type(fName)
            .tab()
            .type(lName + '{enter}')
        cy.get('.fa-sync')
            .each( function($sync) {
                cy.log($sync.text())
            })
            .eq(0)
            .click()
        cy.wait(300)
        cy.get('.list-items')
            .eq(0)
            .click()
        cy.get('.save-btn')
            .click()
    }

    filter_button() {
        cy.get('.btn-warning')
            .each( function($filtro) {
                cy.log($filtro.text())
            })
            .eq(11) // increases by one on each Payroll
            .wait(500)
            .click()
    }

    filter_field(fName, lName) {
        // cy.get('input[name="firstName"]')
        //     .eq(0)
        //     .wait(500)
        //     .clear()
        //     .type(first)
        // cy.get('input[name="lastName"]')
        //     .eq(0)
        //     .wait(500)
        //     .clear()
        //     .type(last, type)
        cy.get('input[name="firstName"]')
            .eq(0)
            .clear()
            .type(fName)
            .tab()
            .clear()
            .type(lName + '{enter}')
        cy.get('.fa-sync')
            .each( function($sync) {
                cy.log($sync.text())
            })
            .eq(2)
            .click()
        

    }

    addCheck(gross) {
        cy.xpath('/html/body/div[2]/div[3]/section/div[2]/div[3]/div/div/div[4]/div[4]/div/table/tbody/tr/td[8]/div[1]/div[1]')
            .click()
        cy.get('[data-href="forms/payrollcheckdetail/list"]')
            .contains('Payroll Check Details')
            .click({force: true})
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div/div[4]/div[2]/div[1]/div[2]/div')
            .click()
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/form/div/div[3]/div[19]/div[1]/div/div/div[2]/button')
            .click()
        cy.get('.list-items')
            .contains('SAL Salary')
            .click()
        cy.wait(150)
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/form/div/div[3]/div[19]/div[2]/div/div/input[1]')
            .click()
            .type('A')
            .wait(150)
            .type('{enter}')
        cy.wait(150)
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/form/div/div[3]/div[22]/div[4]/div/div/input')
            .type(gross)
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/form/div/div[2]/div/div[1]/div')
            .click()
    }
    reset() {
        cy.get('.card')
            .eq(0)
            .find('.bg-lighter')
            .find('.fa-times-circle')
            .click()
        cy.get('.btn-secondary')
            .each( function($clear) {
                cy.log($clear.text())
            })
            .eq(21)// increases by two on each Payroll
            .click()
    }
}

export default createChecks;