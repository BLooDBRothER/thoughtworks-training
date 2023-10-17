import { mount } from '@cypress/react18'
import Board from './Board';

describe('<Board />', () => {

  it('mounts', () => {

    const game = Array(9).fill(null);

    mount(<Board game={game} updateGame={() => {}} wonCondition={[0, 1, 2]} />);

    const board = cy.get('[data-cy=board]');
    board.children().should('have.length', 9)
    cy.get('[data-cy=board]').children().eq(0).should('have.class', 'bg-white/80 text-black')
    cy.get('[data-cy=board]').children().eq(3).should('have.class', 'bg-slate-500')
  })
})
