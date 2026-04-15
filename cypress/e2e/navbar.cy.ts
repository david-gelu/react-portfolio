const linkData = [
  { id: 'main', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'jobs', label: 'Jobs' },
  { id: 'contact', label: 'Contact' }
]

describe('NavBar Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('div.btn-name', { timeout: 10000 }).should('exist');
  });

  it('should load NavBar component with Offcanvas', () => {
    cy.get('div.btn-name').contains('Gelu').should('be.visible');
  });

  it('should display all navigation links', () => {
    linkData.forEach((link) => {
      cy.get(`a[href="#${link.id}"]`).should('exist');
    });
  });

  it('should have proper nav icons from FontAwesome', () => {
    cy.get('i.fas.fa-house-user').should('exist');
    cy.get('i.fas.fa-laptop-code').should('exist');
    cy.get('i.fas.fa-address-card').should('exist');
    cy.get('i.fas.fa-briefcase').should('exist');
    cy.get('i.fas.fa-solid.fa-at').should('exist');
  });

  it('should navigate to each section when clicking links', () => {
    linkData.forEach((link) => {
      cy.get(`a[href="#${link.id}"]`).click();
      cy.url().should('include', `#${link.id}`);
      cy.get(`#${link.id}`).should('be.visible');
    });
  });

  it('should set active class on current section link', () => {
    cy.get('a[href="#projects"]').click();
    cy.wait(500);
    cy.get('a[href="#projects"]').should('have.class', 'active');
  });

  it('should update active state when scrolling', () => {
    cy.get('a[href="#about"]').click();
    cy.wait(500);
    cy.get('a[href="#about"]').should('have.class', 'active');
  });

  it('should return to home (main) section', () => {
    cy.get('a[href="#contact"]').click();
    cy.wait(500);
    cy.get('a[href="#main"]').click();
    cy.wait(500);
    cy.url().should('include', '#main');
    cy.get('#main').should('be.visible');
  });

  it('should have ThemeColor component', () => {
    // ThemeColor component should be rendered in the NavBar
    cy.get('.fa-lightbulb, .fa-moon').should('exist');
  });

  it('should have correct aria-label on Offcanvas', () => {
    cy.get('[aria-label="navbar"]').should('exist');
  });
});
