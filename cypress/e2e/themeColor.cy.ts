
describe('ThemeColor Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should set initial theme based on localStorage and system preference', () => {
    cy.window().then((win) => {
      const prefersDarkScheme = win.matchMedia('(prefers-color-scheme: dark)').matches;
      const htmlElement = win.document.documentElement;
      const currentTheme = htmlElement.getAttribute('data-theme');

      if (prefersDarkScheme) {
        expect(currentTheme).to.equal('dark');
      } else {
        expect(currentTheme).to.equal('light');
      }
    });
  });

  it('should toggle theme when clicking the icon', () => {
    // Get initial theme
    cy.window().then((win) => {
      const initialTheme = win.document.documentElement.getAttribute('data-theme');

      // Click theme toggle
      cy.get('i.fa-lightbulb, i.fa-moon', { timeout: 10000 }).should('exist').click();

      // Verify theme changed
      cy.window().then((win) => {
        const newTheme = win.document.documentElement.getAttribute('data-theme');
        expect(newTheme).to.not.equal(initialTheme);
      });
    });
  });

  it('should persist theme choice in localStorage', () => {
    // Switch to dark mode
    cy.window().then((win) => {
      const currentTheme = win.document.documentElement.getAttribute('data-theme');

      cy.get('i.fa-lightbulb, i.fa-moon').click();

      cy.window().then((win) => {
        const storedTheme = win.localStorage.getItem('dark-mode');
        if (currentTheme === 'light') {
          expect(storedTheme).to.equal('enabled');
        } else {
          expect(storedTheme).to.equal('disabled');
        }
      });
    });
  });

  it('should display theme icon based on current theme', () => {
    cy.window().then((win) => {
      const theme = win.document.documentElement.getAttribute('data-theme');

      if (theme === 'dark') {
        cy.get('i.fa-moon').should('exist');
      } else {
        cy.get('i.fa-lightbulb').should('exist');
      }
    });
  });

  it('should update icon when theme changes', () => {
    cy.get('i.fa-lightbulb, i.fa-moon').should('exist');
    cy.get('i.fa-lightbulb, i.fa-moon').click();
    cy.wait(300);

    cy.window().then((win) => {
      const theme = win.document.documentElement.getAttribute('data-theme');

      if (theme === 'dark') {
        cy.get('i.fa-moon').should('exist');
      } else {
        cy.get('i.fa-lightbulb').should('exist');
      }
    });
  });

  it('should display theme text label', () => {
    cy.get('.nav-text').contains('Theme').should('exist');
  });

  it('should persist theme across page reloads', () => {
    // Click theme toggle to switch
    cy.get('i.fa-lightbulb, i.fa-moon').click();
    cy.wait(300);

    // Verify the theme value after switch
    cy.window().then((win) => {
      const themeAfterSwitch = win.document.documentElement.getAttribute('data-theme');
      const storedTheme = win.localStorage.getItem('dark-mode');

      // Store values for later comparison
      cy.wrap({ themeAfterSwitch, storedTheme }).as('themeState');
    });

    // Reload the page
    cy.reload();
    cy.wait(500); // Wait for app to reinitialize theme

    // Verify theme was restored
    cy.get('@themeState').then((state: any) => {
      cy.window().then((win) => {
        const themeAfterReload = win.document.documentElement.getAttribute('data-theme');
        const storedTheme = win.localStorage.getItem('dark-mode');

        // Verify localStorage still has the value
        expect(storedTheme).to.equal(state.storedTheme);
        // Verify theme was restored correctly
        expect(themeAfterReload).to.equal(state.themeAfterSwitch);
      });
    });
  });
});
