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

  it('Correct when credentials are correct', () => {
    cy.get('#header-login-link').click();
    cy.get('#title-login').should('have.text', 'Inicio de sesión');

    cy.get('[data-testid="username"]').type('admin');
    cy.get('[data-testid="password"]').type('admin');

    cy.get('#login-button').click();

    cy.get('#title-petitions-list').should('have.length', 1);

    cy.get('[data-testid="btn-nav-menu"]').click();

    cy.get('[data-testid="link-to-about"]').click();
    cy.get('#about-header').should('have.length', 1);

    cy.get('[data-testid="btn-nav-menu"]').click();
    cy.get('[data-testid="link-to-landing"]').click();
    cy.get('#header-landing').should('have.length', 1);

    cy.get('[data-testid="btn-nav-menu"]').click();
    cy.get('[data-testid="link-to-dashboard"]').click();
    cy.get('#title-petitions-list').should('have.length', 1);
  });

  it('Cant access to dashboard without login', () => {
    cy.get('[data-testid="btn-nav-menu"]').click();

    cy.get('[data-testid="link-to-about"]').click();
    cy.get('#about-header').should('have.length', 1);

    cy.get('[data-testid="btn-nav-menu"]').click();
    cy.get('[data-testid="link-to-landing"]').click();
    cy.get('#header-landing').should('have.length', 1);

    cy.get('[data-testid="btn-nav-menu"]').click();
    cy.get('[data-testid="link-to-dashboard"]').should('have.length', 0);
  });
});
