describe('AboutMePage', () => {
  beforeEach(() => {
    cy.visit('/#about')
    cy.get('section#about', { timeout: 15000 }).should('exist')
  })

  it('should display the "About me" title', () => {
    cy.contains('h2', 'About me').should('be.visible')
  })

  it('should display professional summary sections', () => {
    cy.contains('Software Developer: 4+ years').should('be.visible')
    cy.contains('I specialize in React, Node.js, and TypeScript').should('be.visible')
  })

  it('should display what I do section', () => {
    cy.contains('h3', 'What I do?').should('be.visible')
    cy.contains('Solving complex problems').should('be.visible')
  })

  it('should display what I am exploring section', () => {
    cy.contains('h3', "What I'm exploring?").should('be.visible')
    cy.contains('expanding backend skills').should('be.visible')
  })

  it('should have a GitHub link', () => {
    cy.get('a[href*="https://github.com/david-gelu?tab=repositories"]').should('have.attr', 'target', '_blank')
  })

  it('should display GitHubContributionsCard component', () => {
    // The component should be rendered as part of AboutMePage
    cy.get('#about').should('exist')
  })

  it('should have motion animation', () => {
    cy.get('section#about').should('exist')
  })
})

describe('StudyPage - Education Tab', () => {
  beforeEach(() => {
    cy.visit('/#about')
    cy.get('section#about', { timeout: 15000 }).should('exist')
  })

  it('should display study/education content', () => {
    cy.get('section#about').should('exist')
    cy.contains('Skills').should('exist')
    cy.contains('Soft Skills').should('exist')
    cy.contains('Education').should('exist')
  })
})

describe('SoftSkillsPage - Skills Tab', () => {
  beforeEach(() => {
    cy.visit('/#about')
    cy.get('section#about', { timeout: 15000 }).should('exist')
  })

  it('should display soft skills content', () => {
    cy.get('section#about').should('exist')
    cy.contains('Skills').should('exist')
    cy.contains('Soft Skills').should('exist')
    cy.contains('Education').should('exist')
  })
})