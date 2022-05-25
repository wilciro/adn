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

  test('Go to login form', () => {
    cy.get('#header-login-link').click();
    cy.get('#title-login').should('have.text', 'Inicio de sesión');
  });

  test('Fail when no input email', () => {
    cy.get('#header-login-link').click();
    cy.get('#title-login').should('have.text', 'Inicio de sesión');

    cy.get('#login-button').click();
    cy.get('.mantine-TextInput-error').should('have.length', 1);
    cy.get('.mantine-PasswordInput-error').should('have.length', 1);
  });

  test('Fail when username no correct', () => {
    cy.get('#header-login-link').click();
    cy.get('#title-login').should('have.text', 'Inicio de sesión');

    cy.get('[data-testid="username"]').type('incorrect');
    cy.get('[data-testid="password"]').type('incorrect');

    cy.get('#login-button').click();

    cy.get('#title-login').should('have.text', 'Inicio de sesión');
  });

  test('Correct when credentials are correct', () => {
    cy.get('#header-login-link').click();
    cy.get('#title-login').should('have.text', 'Inicio de sesión');

    cy.get('[data-testid="username"]').type('admin');
    cy.get('[data-testid="password"]').type('admin');

    cy.get('#login-button').click();

    cy.get('#title-petitions-list').should('have.length', 1);
  });

  test('Correct logout', () => {
    cy.get('#header-login-link').click();
    cy.get('#title-login').should('have.text', 'Inicio de sesión');

    cy.get('[data-testid="username"]').type('admin');
    cy.get('[data-testid="password"]').type('admin');

    cy.get('#login-button').click();

    cy.get('#title-petitions-list').should('have.length', 1);

    cy.get('[data-testid="header-logout-link"]').click();
    cy.get('#title-login').should('have.text', 'Inicio de sesión');
  });
});
