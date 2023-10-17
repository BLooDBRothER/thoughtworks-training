/// <reference types="cypress" />
describe('e2e test', () => {
    it('e2e test for X won', () => {
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
        cy.get('[data-cy=square]').eq(1).should('have.class', 'bg-white/80 text-black');
        cy.get('[data-cy=square]').eq(2).should('have.class', 'bg-white/80 text-black');

        cy.get('[data-cy=winner]').children().should('have.text', 'X Won the match');

    })

    it('e2e test for O won', () => {
        cy.visit('/');

        cy.get('[data-cy=board]').children().should('have.length', 9);
        cy.get('[data-cy=turnX]').should('have.class', 'bg-slate-500');

        cy.get('[data-cy=square]').eq(1).click();

        cy.get('[data-cy=turnO]').should('have.class', 'bg-slate-500');

        cy.get('[data-cy=square]').eq(0).click();
        cy.get('[data-cy=square]').eq(2).click();
        cy.get('[data-cy=square]').eq(4).click();
        cy.get('[data-cy=square]').eq(3).click();
        cy.get('[data-cy=square]').eq(8).click();

        cy.get('[data-cy=square]').eq(0).should('have.class', 'bg-white/80 text-black');
        cy.get('[data-cy=square]').eq(4).should('have.class', 'bg-white/80 text-black');
        cy.get('[data-cy=square]').eq(8).should('have.class', 'bg-white/80 text-black');

        cy.get('[data-cy=winner]').children().should('have.text', 'O Won the match');

    })

    it('e2e test for draw', () => {
        cy.visit('/');

        cy.get('[data-cy=board]').children().should('have.length', 9);
        cy.get('[data-cy=turnX]').should('have.class', 'bg-slate-500');

        cy.get('[data-cy=square]').eq(0).click();

        cy.get('[data-cy=turnO]').should('have.class', 'bg-slate-500');

        cy.get('[data-cy=square]').eq(1).click();
        cy.get('[data-cy=square]').eq(2).click();
        cy.get('[data-cy=square]').eq(4).click();
        cy.get('[data-cy=square]').eq(3).click();
        cy.get('[data-cy=square]').eq(5).click();
        cy.get('[data-cy=square]').eq(7).click();
        cy.get('[data-cy=square]').eq(6).click();
        cy.get('[data-cy=square]').eq(8).click();

        cy.get('[data-cy=winner]').children().should('have.text', 'Match Draw');

    })
})
