// cypress/e2e/contact.cy.ts
describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/#contact');
  });

  it('should display the contact form correctly', () => {
    cy.get('form.contact-form').should('exist');
    cy.get('input[name="email_from"]').should('exist');
    cy.get('textarea[name="message"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should validate form inputs', () => {
    cy.get('input[name="email_from"]')
      .focus()
      .should('have.css', 'border-color', 'rgb(36, 36, 36)');

    cy.get('input[name="email_from"]')
      .type('invalid-email')
      .should('have.css', 'border-color', 'rgb(255, 206, 82)');

    cy.get('button[type="submit"]').click();

    cy.get('input[name="email_from"]')
      .clear()
      .focus()
      .type('test@example.com')
      .should('have.css', 'border-color', 'rgb(0, 133, 51)');

    cy.get('textarea[name="message"]')
      .type('This is a test message.')
      .should('have.css', 'border-color', 'rgb(0, 133, 51)');

    cy.get('button[type="submit"]').click();

    cy.get('input[name="email_from"]').should('have.css', 'border-color', 'rgb(0, 133, 51)');
    cy.get('textarea[name="message"]').should('have.css', 'border-color', 'rgb(0, 133, 51)');
  });


  it('should display success or error message after submitting the form', () => {
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
      statusCode: 200,
      body: { message: 'Success' }
    }).as('sendEmail');

    cy.get('input[name="email_from"]').clear().type('test@example.com');
    cy.get('textarea[name="message"]').type('Test message');
    cy.get('button[type="submit"]').click();

    cy.wait('@sendEmail').its('response.statusCode').should('eq', 200);
  });

  it('should have correct contact details', () => {
    cy.get('a[href="mailto:david.gelu90@gmail.com"]').should('have.text', 'Email: david.gelu90@gmail.com');
    cy.get('a[href="tel:+4 0744 598 995"]').should('have.text', 'Phone:  +4 0744 598 995');
    cy.get('span').contains('Brasov').should('exist');
  });
});
