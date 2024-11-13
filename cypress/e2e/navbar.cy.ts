
const linkData = [
  { id: 'main', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'jobs', label: 'Jobs' },
  { id: 'contact', label: 'Contact' }
]

describe('NavBar Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load NavBar and HomePage components', () => {
    cy.get('main#main').should('exist');
    cy.get('div.btn-name').contains('Gelu').should('be.visible');
    cy.contains('Hello, I\'m').should('be.visible');
  });

  it('should navigate to each section smoothly', () => {
    linkData.forEach((link) => {
      cy.get(`a[href="#${link.id}"]`).click();
      cy.url().should('include', `#${link.id}`);
      cy.get(`#${link.id}`).should('be.visible');
    });
  });

  it('should highlight the active section in the navbar', () => {
    cy.get('a[href="#projects"]').click();
    cy.get('a[href="#projects"]').should('have.class', 'active');

    cy.get('a[href="#about"]').click();
    cy.get('a[href="#about"]').should('have.class', 'active');
  });

  it('should scroll smoothly when clicking on navbar links', () => {
    cy.get('a[href="#contact"]').click();
    cy.wait(500); // Așteaptă puțin pentru animația de scroll
    cy.window().then((win) => {
      const scrollY = win.scrollY;
      expect(scrollY).to.be.greaterThan(0);
    });
  });

  it('should return to the top of the page when clicking on Home link', () => {
    linkData.forEach((link) => {
      cy.get(`a[href="#${link.id}"]`).click()
      cy.wait(500)
      cy.get('a[href="#main"]').click()
      cy.window().then((win) => {
        expect(win.scrollY).to.equal(0)
      })
    });
  });
});
