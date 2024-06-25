// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('text_field', function(selector, value) {
    cy.get(selector)
        .clear()
        .type(value)
})

Cypress.Commands.add('text_field_eq', function(selector,option, value) {
    cy.get(selector)
        .eq(option)
        .clear()
        .type(value)
})

Cypress.Commands.add('text_field_find', function(selector,find, value) {
    cy.get(selector)
        .find(find)
        .clear()
        .type(value)
})

Cypress.Commands.add('text_field_force', function(selector, value) {
    cy.get(selector)
        .invoke('removeAttr', 'style', 'display')
        .type(value, {force:true})
})

Cypress.Commands.add('text_field_xpath', function(selector, value, time) {
    cy.xpath(selector)
        .type(value + '{enter}')
    cy.wait(time)
})

Cypress.Commands.add('select_field', function(selector, value) {
    cy.get(selector)
        .select(value)
})

Cypress.Commands.add('select_field_xpath', function(selector, value) {
    cy.xpath(selector)
        .select(value)
})

Cypress.Commands.add('select_field_eq', function(selector, option, value) {
    cy.get(selector)
        .each(function($state) {
            cy.log($state.text())
        })
        .eq(option)
        .select(value)
})

Cypress.Commands.add('long_lat', function(selector, value) {
    cy.get(selector)
        .invoke('val', value)
})

Cypress.Commands.add('btn_click', function(selector) {
    cy.get(selector)
        .click()
})

Cypress.Commands.add('btn_click_force', function(selector) {
    cy.get(selector)
        .click({force: true})
})

Cypress.Commands.add('btn_click_eq', function(selector, position) {
    cy.get(selector)
        .each(function($btn) {
            cy.log($btn.text())
        })
        .eq(position)
        .click()
    // cy.wait(time)
})
Cypress.Commands.add('btn_click_xpath', function(selector, time) {
    cy.xpath(selector)
        .click()
    cy.wait(time)
})

Cypress.Commands.add('switch_click', function(selector, position, direction) {
    cy.get(selector)
        .each( function($sw) {
            cy.log($sw.text())
        })
        .eq(position)
        .click(direction)
})

Cypress.Commands.add('checkbox', function(selector) {
    cy.get(selector)
        .click('left')
})

Cypress.Commands.add('checkbox_eq', function(selector, position) {
    cy.get(selector)
        .each( function($chck) {
            cy.log($chck.text())
        })
        .eq(position)
        .click('left')
})

Cypress.Commands.add('click_ctrl', function(selector) {
    cy.get(selector)
        .click({
            ctrlKey: true
        })
})

Cypress.Commands.add('upload', function(selector, file) {
    const ruta = file
    cy.get(selector)
        .attachFile(ruta)
})

Cypress.Commands.add('upload_eq', function(selector, file, position) {
    const ruta = file
    cy.get(selector)
        .eq(position)
        .attachFile(ruta)
})

Cypress.Commands.add('nav_tab', function(selector, contains, time){
    cy.get(selector)
        .contains(contains)
        .click({force: true})
    cy.wait(time)
})
Cypress.Commands.add('nav_tab_xpath', function(selector, contains, time){
    cy.xpath(selector)
        .contains(contains)
        .click()
    cy.wait(time)
})