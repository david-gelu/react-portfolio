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
    cy.get('i.fa-lightbulb, i.fa-moon', { timeout: 10000 }).should('exist').as('themeIcon');

    cy.get('@themeIcon').then(($icon) => {
      const isMoon = $icon.hasClass('fa-moon');
      const initialTheme = isMoon ? 'dark' : 'light';

      cy.get('@themeIcon').click();
      cy.wait(500);

      cy.window().then((win) => {
        const newTheme = win.document.documentElement.getAttribute('data-theme');
        expect(newTheme).to.not.equal(initialTheme);
      });
    });
  });

  it('should persist theme choice in localStorage', () => {
    cy.get('i.fa-lightbulb, i.fa-moon', { timeout: 10000 }).should('exist').click();

    cy.window().then((win) => {
      const storedTheme = win.localStorage.getItem('dark-mode');
      const theme = win.document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        expect(storedTheme).to.equal('enabled');
      } else {
        expect(storedTheme).to.equal('disabled');
      }
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
    cy.wait(500);

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
    cy.wait(500);

    // Verify the theme value after switch
    cy.window().then((win) => {
      const themeAfterSwitch = win.document.documentElement.getAttribute('data-theme');
      const storedTheme = win.localStorage.getItem('dark-mode');
      cy.wrap({ themeAfterSwitch, storedTheme }).as('themeState');
    });

    // Reload the page
    cy.reload();
    cy.wait(500);

    // Verify theme was restored
    cy.get('@themeState').then((state) => {
      cy.window().then((win) => {
        const themeAfterReload = win.document.documentElement.getAttribute('data-theme');
        const storedTheme = win.localStorage.getItem('dark-mode');

        expect(storedTheme).to.equal(state.storedTheme);
        expect(themeAfterReload).to.equal(state.themeAfterSwitch);
      });
    });
  });
});