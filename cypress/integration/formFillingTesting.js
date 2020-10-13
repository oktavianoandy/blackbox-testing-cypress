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
            .find('[type="submit"]')
            .click();

        cy.url().should('include', 'forms/layouts?')

    });

    it('Using the Grid testing ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.contains('nb-card', 'Using the Grid')
            .find('[data-cy="imputEmail1"]')
            .click()
            .type("Oktaviano@gmail.com");

        cy.get('#inputPassword2')
            .click()
            .type("halo");

        cy.contains('nb-card', 'Using the Grid')
            .contains("Option 1")
            .parent('nb-radio')
            .find('.inner-circle')
            .click();

        cy.contains('nb-card', 'Using the Grid')
            .find('[type="submit"]')
            .click();

        cy.url().should('include', 'forms/layouts?undefined=undefined');
    });

    it('Basic form testing ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.contains('nb-card', 'Basic form')
            .find('[id="exampleInputEmail1"]')
            .click()
            .type("Oktaviano@gmail.com");

        cy.contains('nb-card', 'Basic form')
            .find('[id="exampleInputPassword1"]')
            .click()
            .type("Halo");

        cy.contains('nb-card', 'Basic form')
            .find('.custom-checkbox')
            .click();

        cy.contains('nb-card', 'Basic form')
            .find('[type="submit"]')
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
            .find('[type="submit"]')
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
            .find('[type="submit"]')
            .click()
        
        cy.url().should('include', 'forms/layouts')

    });

});