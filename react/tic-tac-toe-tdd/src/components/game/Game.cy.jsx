import { mount } from '@cypress/react18'
import Game from './Game'

describe('<Game />', () => {

  it('mounts', () => {
    mount(<Game />);  

    cy.get('[data-cy=turnX]').should('have.class', 'bg-slate-500');
  })
})
