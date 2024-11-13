import '@cypress/react';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * O comandă dummy de exemplu
       */
      dummy(): Chainable<void>;
    }
  }
}

// Adaugă comanda personalizată
Cypress.Commands.add('dummy', () => {
  cy.log('This is a dummy command.');
})
