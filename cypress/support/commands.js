Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://demo.realworld.io/#/');
    cy.contains('Sign in').click();
    cy.get("input[placeholder = 'Email']").type(email);
    cy.get("input[placeholder = 'Password']").type(password);
    cy.get("button[type='submit']").click();
    cy.contains('MaksymLQi').should('be.visible');
})



