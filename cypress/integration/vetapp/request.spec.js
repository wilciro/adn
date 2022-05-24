/* eslint-disable no-undef */
/// <reference types='cypress' />

context('Actions', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET', // Route all GET requests
        url: '/user?username=admin&password=admin', // that have a URL that matches '/users/*'
      },
      [{ username: 'admin' }],
    ).as('getUsers');

    cy.visit('http://localhost:3000/');
  });

  it('Landing exists', () => {
    const username = (Math.random() + 1).toString(36).substring(7);

    cy.get('#header-landing').should('have.length', 1);
    cy.get('[data-testid="ownerName"]').type(username);
    cy.get('[data-testid="ownerDocument"]').type('10252525');
    cy.get('[data-testid="petName"]').type('Ciri');
    cy.get('[data-testid="petAge"]').type(1);
    cy.get('[data-testid="petType"]').click();
    cy.get('.mantine-Select-item').first().click();
    cy.get('[data-testid="total-data"').should(
      'have.text',
      'Total: $\xa010.000,00',
    );
    cy.get('[data-testid="petType"]').click();
    cy.get('.mantine-Select-item').last().click();
    cy.get('[data-testid="total-data"').should(
      'have.text',
      'Total: $\xa020.000,00',
    );
    cy.get('[data-testid="date"]').click();
    cy.get('.mantine-DatePicker-calendarHeaderControl').last().click();
    cy.get('.mantine-DatePicker-day:contains(15)').click();
    cy.get('.mantine-TimeInput-timeInput').first().type(10);

    cy.get('.mantine-TimeInput-controls > input').last().type('a');

    cy.get('[data-testid="register-btn"]').click();

    cy.get('#header-login-link').click();
    cy.get('#title-login').should('have.text', 'Inicio de sesión');

    cy.get('[data-testid="username"]').type('admin');
    cy.get('[data-testid="password"]').type('admin');

    cy.get('#login-button').click();

    cy.get('#title-petitions-list').should('have.length', 1);
    cy.contains(username, { timeout: 10000 });
  });
});
