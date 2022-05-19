/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
  
    it('Go to login form', () => {
        cy.get('#header-login-link').click()
        cy.get('#title-login').should('have.text', "Inicio de sesión")
    })
  
    it('Fail when no input email', () => {
        cy.get('#header-login-link').click()
        cy.get('#title-login').should('have.text', "Inicio de sesión")

        cy.get('#login-button').click()
        cy.get(".mantine-TextInput-error").should("have.length", 1)
        cy.get(".mantine-PasswordInput-error").should("have.length", 1)        
    })
  
    it('Fail when username no correct', () => {
        cy.get('#header-login-link').click()
        cy.get('#title-login').should('have.text', "Inicio de sesión")

        cy.get("[data-testid='Nombre de usuario']").type("incorrect")
        cy.get("[data-testid='Contraseña']").type("incorrect")

        cy.get('#login-button').click()

        cy.get('#title-login').should('have.text', "Inicio de sesión")
    })
  
    it('Correct when credentials are correct', () => {
        cy.get('#header-login-link').click()
        cy.get('#title-login').should('have.text', "Inicio de sesión")

        cy.get("[data-testid='Nombre de usuario']").type("admin")
        cy.get("[data-testid='Contraseña']").type("admin")

        cy.get('#login-button').click()
        
        cy.get('#title-petitions-list').should('have.length', 1)
    })
  
    it('Correct logout', () => {
        cy.get('#header-login-link').click()
        cy.get('#title-login').should('have.text', "Inicio de sesión")

        cy.get("[data-testid='Nombre de usuario']").type("admin")
        cy.get("[data-testid='Contraseña']").type("admin")

        cy.get('#login-button').click()
        
        cy.get('#title-petitions-list').should('have.length', 1)

        cy.get('#header-logout-link').click()
        cy.get('#title-login').should('have.text', "Inicio de sesión")
    })
  
})
  