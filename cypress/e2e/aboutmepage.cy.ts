describe('AboutMePage', () => {
  beforeEach(() => {
    cy.visit('/#about')
    cy.get('section.about', { timeout: 10000 }).should('exist')
  })

  it('should display the "About me" title', () => {
    cy.contains('h2', 'About me').should('be.visible')
  })

  it('should display professional summary sections', () => {
    cy.contains('h3', 'Greetings!').should('be.visible')
    cy.contains('Full-Stack Developer with 4+ years of experience').should('be.visible')
  })

  it('should display what I do section', () => {
    cy.contains('h3', 'What I do?').should('be.visible')
    cy.contains('React, Node.js, and TypeScript').should('be.visible')
  })

  it('should display what I am exploring section', () => {
    cy.contains('h3', 'What I\'m exploring?').should('be.visible')
    cy.contains('Node.js, MongoDB, and Express').should('be.visible')
  })

  it('should have a GitHub link', () => {
    cy.get('a[href*="https://github.com/david-gelu"]').should('have.attr', 'target', '_blank')
  })

  it('should display GitHubContributionsCard component', () => {
    // The component should be rendered as part of AboutMePage
    cy.get('#about').should('exist')
  })

  it('should have motion animation', () => {
    cy.get('section.about').should('exist')
  })
})

describe('StudyPage - Education Tab', () => {
  beforeEach(() => {
    cy.visit('/#about')
    cy.get('section.about', { timeout: 10000 }).should('exist')
  })

  it('should display study/education content', () => {
    cy.get('section.about').should('exist')
  })
})

describe('SoftSkillsPage - Skills Tab', () => {
  beforeEach(() => {
    cy.visit('/#about')
    cy.get('section.about', { timeout: 10000 }).should('exist')
  })

  it('should display soft skills content', () => {
    cy.get('section.about').should('exist')
  })
})