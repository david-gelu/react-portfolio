
describe('ThemeColor Component', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/');
  });

  it('should set initial theme based on localStorage and system preference', () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkScheme) {
      cy.get('[data-theme]').should('have.attr', 'data-theme', 'dark');
    } else {
      cy.get('[data-theme]').should('have.attr', 'data-theme', 'light');
    }
  });

  it('should toggle theme when clicking the icon', () => {
    // Așteaptă ca elementul să fie vizibil
    cy.get('.fa-lightbulb', { timeout: 10000 }).should('be.visible').click();

    cy.get('[data-theme]').should('have.attr', 'data-theme', 'dark');

    cy.get('.fa-moon').click();

    cy.get('[data-theme]').should('have.attr', 'data-theme', 'light');
  });


  it('should persist theme choice in localStorage', () => {
    cy.get('.fa-lightbulb').click();

    cy.window().then((win) => {
      expect(win.localStorage.getItem('dark-mode')).to.equal('enabled');
    });
    cy.get('.fa-moon').click();

    cy.window().then((win) => {
      expect(win.localStorage.getItem('dark-mode')).to.equal('disabled');
    });
  });
});
