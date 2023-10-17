/// <reference types="cypress" />
describe('Just visit e2e test', () => {
    it('should visit', () => {
        cy.visit('/');

        cy.get('[data-cy=board]').children().should('have.length', 9);
        cy.get('[data-cy=turnX]').should('have.class', 'bg-slate-500');

        cy.get('[data-cy=square]').eq(0).click();

        cy.get('[data-cy=turnO]').should('have.class', 'bg-slate-500');

        cy.get('[data-cy=square]').eq(3).click();
        cy.get('[data-cy=square]').eq(1).click();
        cy.get('[data-cy=square]').eq(4).click();
        cy.get('[data-cy=square]').eq(2).click();

        cy.get('[data-cy=square]').eq(0).should('have.class', 'bg-white/80 text-black');

        cy.get('[data-cy=winner]').children().should('have.text', 'X Won the match');

    })
})
