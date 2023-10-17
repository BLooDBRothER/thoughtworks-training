import { mount } from '@cypress/react18'
import Square from './Square'

describe('<Square />', () => {

  it('mounts', () => {
    mount(<Square squareValue="X" isHighlight={true} updateGame={cy.stub().as('square_click')} />);

    const square = cy.get('[data-cy=square]');
    square.should('have.text', 'X');
    square.should('have.class', 'bg-white/80 text-black');
    square.click();
    cy.get('@square_click').should('have.been.called')
  
  })
})
