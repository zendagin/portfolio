/// <reference types="cypress" />

const aboutSelector = "[data-cy=nav-about]";
const worksSelector = "[data-cy=nav-works]";
const host = Cypress.config("baseUrl") || "http://localhost:3000/";

describe('navigation', () => {
    beforeEach(() => {
        cy.visit(host);
    });

    it('nav to works page', () => {
        cy.get(worksSelector)
            .should('be.visible')
            .click();

        cy.url().should(
            'be.equal',
            host + "works"
        );
    });

    it('nav back to home page', () => {
        cy.get(worksSelector)
            .should('be.visible')
            .click();

        cy.url().should(
            'be.equal',
            host + "works"
        );

        cy.get(aboutSelector)
            .should('be.visible')
            .click();

        cy.url().should(
            'be.equal',
            host
        );
    });
});
