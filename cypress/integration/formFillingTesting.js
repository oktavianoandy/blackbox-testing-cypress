/// <reference types="cypress" />

describe('Form filling testing', () => {

    it('Inline form testing ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.contains('nb-card', 'Inline form')
            .find('[placeholder="Jane Doe"]')
            .click()
            .type("Oktaviano");

        cy.contains('nb-card', 'Inline form')
            .find('[placeholder="Email"]')
            .click()
            .type("Oktaviano@gmail.com");

        cy.contains('nb-card', 'Inline form')
            .find('.custom-checkbox')
            .click();

        cy.contains('nb-card', 'Inline form')
            .find('button')
            .click();

        cy.url().should('include', 'forms/layouts?')
    });

    it('Using the Grid testing ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('#inputEmail1')
            .click()
            .type("Oktaviano@gmail.com");

        cy.get('#inputPassword2')
            .click()
            .type("halo");

        cy.contains("Option 2")
            .click();

        cy.contains('nb-card', 'Using the Grid')
            .find('button')
            .click();

        cy.url().should('include', 'forms/layouts?undefined=undefined');
    });

    it('Basic form testing ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('#exampleInputEmail1')
            .click()
            .type("Oktaviano@gmail.com");

        cy.get('#exampleInputPassword1')
            .click()
            .type("Halo");

        cy.contains('Check me out')
            .click();

        cy.contains('nb-card', 'Basic form')
            .find('button')
            .click();

        cy.url().should('include', 'forms/layouts?');
    });

    it('Form without labels ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.contains('nb-card', 'Form without labels')
            .find('[placeholder="Recipients"]')
            .click()
            .type("Oktaviano");

        cy.contains('nb-card', 'Form without labels')
            .find('[placeholder="Subject"]')
            .click()
            .type("Ini subject");

        cy.contains('nb-card', 'Form without labels')
            .find('[placeholder="Message"]')
            .click()
            .type("Ini pesan");

        cy.contains('nb-card', 'Form without labels')
            .find('button')
            .click()

        cy.url().should('include', 'forms/layouts?')
    });

    it('Block form ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('#inputFirstName')
            .click()
            .type("Oktaviano");

        cy.get('#inputLastName')
            .click()
            .type("Andy");

        cy.get('#inputEmail')
            .click()
            .type("oktaviano@gmail.com");

        cy.get('#inputWebsite')
            .click()
            .type("github.com/oktavianoandy");

        cy.contains('nb-card', 'Block form')
            .find('button')
            .click()
        
        cy.url().should('include', 'forms/layouts')
    });

});