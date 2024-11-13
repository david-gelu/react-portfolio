describe('AboutMePage', () => {
  beforeEach(() => {
    cy.visit('/#about')
  })

  it('should display the "About Me" title', () => {
    cy.contains('h2', 'About me').should('be.visible')
  })

  it('should display the greetings section', () => {
    cy.contains('h3', 'Greetings!').should('be.visible')
  })

  it('should display the skills section on button click', () => {
    cy.get('button').contains('Skills').click()
    cy.get('.skills-container').should('be.visible')
  })

  it('should display the education section on button click', () => {
    cy.get('button').contains('Education').click()
    cy.get('.study').should('be.visible')
  })

  it('should toggle between Skills and Education tabs', () => {
    cy.get('button').contains('Education').click()
    cy.get('.study').should('be.visible')
    cy.get('button').contains('Skills').click()
    cy.get('.skills-container').should('be.visible')
  })

  it('should have a GitHub link', () => {
    cy.get('a[href="https://github.com/david-gelu?tab=repositories"]').should('have.attr', 'href').and('include', 'github')
  })

  it('should display a list of studies', () => {
    cy.get('button').contains('Education').as('btn').click();
    cy.get('@btn').should('have.class', 'btn-success');
    cy.get('@btn').should('not.have.class', 'outline-success');
    cy.get('.study-card').should('have.length.greaterThan', 0)
  })

  it('should display the institution name and study name', () => {
    cy.get('button').contains('Education').as('btn').click();
    cy.get('@btn').should('have.class', 'btn-success');
    cy.get('@btn').should('not.have.class', 'outline-success');
    cy.get('.study-card').first().contains('span', 'MongoDb').should('be.visible')
    cy.get('.study-card').first().contains('span', 'Introduction to MongoDB - database').should('be.visible')
  })
})
describe('TooltipWrap', () => {
  it('should show tooltip on hover over skill icon', () => {
    cy.visit('/about')
    cy.get('.skill-icon-container').first().trigger('mouseover')
    cy.get('.tooltip').should('be.visible')
  })
})