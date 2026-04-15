describe('HomePage Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the main content section', () => {
    cy.get('#main').should('exist').should('have.class', 'main');
    cy.get('.main-name-div').should('be.visible');
  });

  it('should display the logo with name and title', () => {
    cy.contains('David Gelu').should('be.visible');
    cy.contains('Software Developer').should('be.visible');
    cy.contains('Full-Stack Developer focused on building fast, scalable').should('be.visible');
  });

  it('should display WHAT I DO section with list items', () => {
    cy.contains('WHAT I DO:').should('be.visible');
    cy.contains('Build scalable frontend architectures').should('be.visible');
    cy.contains('Develop reusable UI components').should('be.visible');
    cy.contains('Optimize performance and rendering').should('be.visible');
    cy.contains('Integrate APIs and manage data efficiently').should('be.visible');
  });

  it('should have a download CV button', () => {
    cy.get('a[aria-label="download cv"]').should('exist');
    cy.get('a[aria-label="download cv"]').should('have.attr', 'href', 'img/DavidGeluCV.pdf');
    cy.get('a[aria-label="download cv"]').should('have.attr', 'download', 'DavidGeluCV.pdf');
    cy.get('a[aria-label="download cv"]').contains('DOWNLOAD CV').should('be.visible');
  });

  it('should have contact links with proper attributes', () => {
    cy.get('a[aria-label="phone number"]').should('have.attr', 'href', 'tel:+4 0744 598 995');
    cy.get('a[aria-label="email"]').should('have.attr', 'href', 'mailto:david.gelu90@gmail.com');
  });

  it('should have social media links', () => {
    cy.get('a[href="https://www.linkedin.com/in/gelu-fanel-david/"]')
      .should('have.attr', 'target', '_blank');

    cy.get('a[href="https://github.com/david-gelu?tab=repositories"]')
      .should('have.attr', 'target', '_blank');
  });

  it('should have motion animation wrapper', () => {
    cy.get('section.main').should('exist');
  });
});
