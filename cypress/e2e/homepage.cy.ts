describe('HomePage Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the main content', () => {
    cy.get('#main').should('exist');
    cy.contains('Hello, I\'m').should('be.visible');
    cy.contains('Web Developer').should('be.visible');
  });

  it('should display contact links with tooltips', () => {
    cy.get('a[aria-label="download cv"]').should('have.attr', 'href', 'img/DavidGeluCV.pdf');
    cy.get('a[aria-label="phone number"]').should('have.attr', 'href', 'tel:+4 0744 598 995');
    cy.get('a[aria-label="email"]').should('have.attr', 'href', 'mailto:david.gelu90@gmail.com');
  });

  it('should download the CV when clicking the download link', () => {
    cy.get('a[aria-label="download cv"]').should('have.attr', 'download', 'DavidGeluCV.pdf');
    cy.get('a[aria-label="download cv"]').click();
  });

  it('should navigate to LinkedIn profile', () => {
    cy.get('a[aria-label="linkedin"]')
      .should('have.attr', 'href', 'https://www.linkedin.com/in/gelu-fanel-david/')
      .should('have.attr', 'target', '_blank').click();
  });

  it('should navigate to GitHub repository', () => {
    cy.get('a[aria-label="github repo"]')
      .should('have.attr', 'href', 'https://github.com/david-gelu/react-portfolio')
      .should('have.attr', 'target', '_blank').click();
  });

  it('should display the lazy loaded image', () => {
    cy.get('img[alt="image with code"]').should('be.visible');
    cy.get('img[alt="image with code"]').should('have.attr', 'src').and('include', 'code.png');
  });
});
