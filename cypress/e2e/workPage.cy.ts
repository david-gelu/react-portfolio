describe('WorkPage Component', () => {
  beforeEach(() => {
    cy.visit('/#jobs');
  });

  it('should render the title of the page', () => {
    cy.get('h2.title-text').should('have.text', 'Work');
  });

  it('should display the job title', () => {
    cy.get('h3.projects-titl').should('have.text', 'Web Developer Everseen');
  });

  it('should render all responsibilities from WorkContext', () => {
    const responsibilities = [
      'Component Development: Employed React, TypeScript, SCSS, Bootstrap, and Styled Components within a Node.js environment to develop reusable components and implement innovative features, ensuring cross-browser compatibility and consistent performance across platforms.',
      'UI/UX Collaboration: Worked closely with UX/UI designers to transform design concepts into functional, user-friendly interfaces. Through ongoing collaboration, contributed to iterative design improvements, enhancing the overall user experience.',
      'Agile Development: Experienced in Agile methodologies, utilizing tools such as Jira and Confluence to foster efficient collaboration and project management in fast-paced development environments. Proficient with GitLab for version control, ensuring code integrity, maintainability, and seamless team collaboration.',
      'Scalable Interface Development: Skilled in building and optimizing scalable interfaces that deliver a seamless user experience, addressing diverse user needs and supporting business growth objectives.',
      'Teamwork: A collaborative and results-driven team player, excels in dynamic team environments by leveraging collective expertise to achieve high-quality outcomes. Consistently contributes to project success through effective communication and shared problem-solving.',
    ];

    cy.get('.left h4').should('have.length', responsibilities.length);

    responsibilities.forEach((text, index) => {
      cy.get('.left h4').eq(index).should('have.text', text);
    });
  });
});
