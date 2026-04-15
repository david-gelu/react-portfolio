// cypress/e2e/contact.cy.ts
describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/#contact');
    cy.get('section.contact-section', { timeout: 10000 }).should('exist');
  });

  it('should display the contact section', () => {
    cy.get('section.contact-section').should('exist');
    cy.get('.contact-card').should('be.visible');
  });

  it('should display contact header with title and meta information', () => {
    cy.get('.contact-header__eyebrow').contains('GET IN TOUCH').should('be.visible');
    cy.get('.contact-header__title').contains('Interested in working together?').should('be.visible');
    cy.get('.contact-header__meta').should('be.visible');
  });

  it('should display sidebar with direct links', () => {
    cy.get('aside.contact-sidebar').should('be.visible');
    cy.get('a[href="mailto:david.gelu90@gmail.com"]').should('exist');
    cy.get('a[href="tel:+40744598995"]').should('exist');
    cy.get('a[href="https://linkedin.com/in/gelu-fanel-david"]').should('have.attr', 'target', '_blank');
    cy.get('a[href="https://github.com/david-gelu"]').should('have.attr', 'target', '_blank');
  });

  it('should display availability badge', () => {
    cy.get('.availability-badge').should('be.visible');
    cy.get('.availability-badge').contains('Open to opportunities').should('be.visible');
  });

  it('should display the contact form', () => {
    cy.get('form.contact-form').should('exist');
    cy.get('input[name="email_from"]').should('exist');
    cy.get('textarea[name="message"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should have email input field with pattern validation', () => {
    cy.get('input[name="email_from"]').should('have.attr', 'pattern');
    cy.get('input[name="email_from"]').should('have.attr', 'required');
  });

  it('should have message textarea with maxLength', () => {
    cy.get('textarea[name="message"]').should('have.attr', 'maxLength');
    cy.get('textarea[name="message"]').should('have.attr', 'required');
  });

  it('should display progress bar for message length', () => {
    cy.get('.char-bar').should('exist');
  });

  it('should update message length when typing', () => {
    const testMessage = 'This is a test message for the contact form.';
    cy.get('textarea[name="message"]').type(testMessage);
    cy.get('textarea[name="message"]').should('have.value', testMessage);
  });

  it('should have proper form labels', () => {
    cy.get('label[for="emailFrom"]').should('exist');
    cy.get('label[for="message"]').should('exist');
  });

  it('should display contact information in header meta', () => {
    cy.get('.meta-item').should('have.length.greaterThan', 0);
    cy.get('.meta-dot').should('exist');
  });
});
