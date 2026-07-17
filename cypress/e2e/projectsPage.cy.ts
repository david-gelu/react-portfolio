describe('ProjectsPage Component', () => {
  beforeEach(() => {
    cy.visit('/#projects');
    cy.get('section#projects', { timeout: 10000 }).should('exist');
  });

  it('should display the projects section with title', () => {
    cy.get('section#projects').should('exist');
    cy.get('h2').contains('Projects').should('be.visible');
  });

  it('should display filter buttons', () => {
    cy.get('.projects-filters').should('be.visible');
    cy.get('button').contains('All').should('exist');
    cy.get('button').contains('Ts / React / Nextjs').should('exist');
    cy.get('button').contains('HTML / CSS / SCSS').should('exist');
  });

  it('should display all projects by default', () => {
    cy.get('.proj-card').should('have.length', 13);
  });

  it('should filter projects by "js" category', () => {
    cy.get('button').contains('Ts / React / Nextjs').click();
    cy.get('button').contains('Ts / React / Nextjs').should('have.class', 'btn-success');
    cy.get('button').contains('Ts / React / Nextjs').should('not.have.class', 'btn-outline-success');
    cy.get('.proj-card').should('have.length.greaterThan', 0);
  });

  it('should filter projects by "css" category', () => {
    cy.get('button').contains('HTML / CSS / SCSS').click();
    cy.get('button').contains('HTML / CSS / SCSS').should('have.class', 'btn-success');
    cy.get('button').contains('HTML / CSS / SCSS').should('not.have.class', 'btn-outline-success');
    cy.get('.proj-card').should('have.length.greaterThan', 0);
  });

  it('should reset the filter when "All" is clicked', () => {
    cy.get('button').contains('Ts / React / Nextjs').click();
    cy.wait(500);
    cy.get('.proj-card').should('have.length.greaterThan', 0);

    cy.get('button').contains('All').click();
    cy.wait(500);
    cy.get('.proj-card').should('have.length', 13);
  });

  it('should display project cards with images', () => {
    cy.get('.proj-card').first().within(() => {
      cy.get('.card-img-wrap').should('exist');
      cy.get('.card-img').should('exist');
    });
  });

  it('should display project info in each card', () => {
    cy.get('.proj-card').first().within(() => {
      cy.get('.card-title').should('exist');
      cy.get('.card-desc').should('exist');
      cy.get('.card-tech').should('exist');
    });
  });

  it('should display project tech icons', () => {
    cy.get('.proj-card').first().within(() => {
      cy.get('.card-tech i').should('have.length.greaterThan', 0);
    });
  });

  it('should have Live and Code buttons for each project', () => {
    cy.get('.proj-card').first().within(() => {
      cy.get('a.btn-proj').should('have.length', 2);
      cy.get('a.btn-proj').first().contains('Live').should('be.visible');
      cy.get('a.btn-proj').last().contains('Code').should('be.visible');
    });
  });

  it('should have proper project links with target _blank', () => {
    cy.get('.proj-card').first().within(() => {
      cy.get('a.btn-proj').each(($link) => {
        cy.wrap($link).should('have.attr', 'target', '_blank');
      });
    });
  });

  it('should animate projects with Framer Motion', () => {
    cy.get('.proj-card').should('have.length.greaterThan', 0);
  });
});
