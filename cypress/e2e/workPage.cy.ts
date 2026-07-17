describe('WorkPage Component', () => {
  beforeEach(() => {
    cy.visit('/#jobs');
    cy.get('div#jobs', { timeout: 10000 }).should('exist');
  });

  it('should render the Work section', () => {
    cy.get('div#jobs').should('exist');
    cy.get('div#jobs').should('have.class', 'section');
  });

  it('should display the title "Work"', () => {
    cy.get('h2.title').contains('Work').should('be.visible');
  });

  it('should display the job title and company', () => {
    cy.contains('Software Developer').should('be.visible');
    cy.contains('Everseen').should('be.visible');
  });

  it('should display technologies used', () => {
    cy.contains('React').should('be.visible');
    cy.contains('TypeScript').should('be.visible');
    cy.contains('MongoDB').should('be.visible');
    cy.contains('Node.js').should('be.visible');
  });

  it('should display all job responsibilities', () => {
    cy.get('.work-responsability').should('have.length', 7);
    cy.get('.work-responsability').each(($el) => {
      cy.wrap($el).should('not.be.empty');
    });
  });

  it('should display expected job responsibility keywords', () => {
    cy.contains('analytics dashboards').should('exist');
    cy.contains('reusable UI component library').should('exist');
    cy.contains('rendering').should('exist');
    cy.contains('Agile').should('exist');
  });

  it('should have proper structure with .left container', () => {
    cy.get('.left').should('exist');
    cy.get('.work-responsability').should('have.length.at.least', 1);
  });
});
