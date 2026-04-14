import App from './App';

describe('Component tests', () => {
  it('basic component test', () => {
    cy.mount(<App />);
    cy.get('[ui5-shellbar]').should('be.visible');
  });
});

describe('Theme toggle', () => {
  it('renders the dark mode toggle item in the shellbar', () => {
    cy.mount(<App />);
    cy.get('[ui5-shellbar-item][text="Dark Mode"]').should('exist');
  });

  it('switches to dark mode on click and back to light mode on second click', () => {
    cy.mount(<App />);

    // Initial state: dark mode item visible, light mode item absent
    cy.get('[ui5-shellbar-item][text="Dark Mode"]').should('exist');
    cy.get('[ui5-shellbar-item][text="Light Mode"]').should('not.exist');

    // Click the toggle — triggers item-click event on the shellbar
    cy.get('[ui5-shellbar-item][text="Dark Mode"]').then(($el) => {
      $el[0].dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    });

    // After first click: should be in dark mode
    cy.get('[ui5-shellbar-item][text="Light Mode"]').should('exist');
    cy.get('[ui5-shellbar-item][text="Dark Mode"]').should('not.exist');

    // Click again to return to light mode
    cy.get('[ui5-shellbar-item][text="Light Mode"]').then(($el) => {
      $el[0].dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    });

    // Back to initial state
    cy.get('[ui5-shellbar-item][text="Dark Mode"]').should('exist');
    cy.get('[ui5-shellbar-item][text="Light Mode"]').should('not.exist');
  });
});
