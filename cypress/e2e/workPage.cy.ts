describe('WorkPage Component', () => {
  beforeEach(() => {
    cy.visit('/#jobs');
    cy.get('div#jobs', { timeout: 10000 }).should('exist');
  });

  it('should render the Work section', () => {
    cy.get('div#jobs').should('exist');
    cy.get('div#jobs').should('have.class', 'jobs');
  });

  it('should display the title "Work"', () => {
    cy.get('h2.title-text').contains('Work').should('be.visible');
  });

  it('should display the job title "Web Developer Everseen"', () => {
    cy.get('h3.projects-titl').contains('Web Developer Everseen').should('be.visible');
  });

  it('should render the projects-image container', () => {
    cy.get('div.projects-image').should('exist');
  });

  it('should display all job responsibilities', () => {
    cy.get('.left h4').should('have.length', 5);
    cy.get('.left h4').each(($el) => {
      cy.wrap($el).should('not.be.empty');
    });
  });

  it('should display analytics dashboard responsibility', () => {
    cy.get('.left h4').contains('analytics dashboard').should('exist');
  });

  it('should display components library responsibility', () => {
    cy.get('.left h4').contains('library of reusable UI components').should('exist');
  });

  it('should display performance optimization responsibility', () => {
    cy.get('.left h4').contains('rendering performance').should('exist');
  });

  it('should display UX/UI collaboration responsibility', () => {
    cy.get('.left h4').contains('UX/UI designers').should('exist');
  });

  it('should display Agile environment responsibility', () => {
    cy.get('.left h4').contains('Agile environment').should('exist');
  });

  it('should have proper structure with .left container', () => {
    cy.get('.left').should('exist');
    cy.get('.left h4').should('have.length', 5);
  });

  it('should contain specific technologies mentioned in responsibilities', () => {
    cy.get('.left h4').contains('React').should('exist');
    cy.get('.left h4').contains('TypeScript').should('exist');
    cy.get('.left h4').contains('MongoDB').should('exist');
  });
});
