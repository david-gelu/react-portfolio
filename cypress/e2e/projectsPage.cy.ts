describe('ProjectsPage Component', () => {
  beforeEach(() => {
    cy.visit('/#projects');
  });

  it('should display all projects by default', () => {
    cy.get('.projects__item').should('have.length', 9);
  });

  it('should filter projects by "js" category', () => {

    cy.get('button').contains('HTML / CSS / Scss').as('btn').click();
    cy.get('@btn').should('have.class', 'btn-success');
    cy.get('@btn').should('not.have.class', 'outline-success');
  });

  it('should filter projects by "css" category', () => {
    cy.get('button').contains('HTML / CSS / Scss').as('btn').click();

    cy.get('@btn').should('have.class', 'btn-success');
    cy.get('@btn').should('not.have.class', 'outline-success');
  });


  it('should reset the filter when "All" is clicked', () => {
    cy.get('button').contains('All').click();

    cy.get('.projects__item').should('have.length', 9);
  });

  it('should load images when they come into view', () => {
    cy.get('button').contains('All').click();
    cy.get('.projects__item').first().within(() => {
      cy.wait(1000);
      cy.get('img').should('have.attr', 'src').and('include', 'tasks');
    });

    cy.get('.projects__item').eq(1).within(() => {
      cy.wait(1000);
      cy.get('img').should('have.attr', 'src').and('include', 'book');
    });
  });


  it('should have links to project and GitHub repositories', () => {
    cy.get('.projects__item').each(($el) => {
      cy.wrap($el).find('a').should('have.length', 2);
    });
  });
});
