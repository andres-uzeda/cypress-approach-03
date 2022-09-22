/// <reference types="cypress" />

//#add-to-cart

describe('Verify that it is possible to open the cart', () => {
    it('Verify that Weekender price in the cart is 295.00', () => {
        cy.visit('/')
        cy.get('a[href="/products/e2e"]').click()
        cy.get('.nyla--add-to-cart').click()
        //TODO: improve the following selectors
        cy.get('.css-1vi1y6c').click
        cy.get('.css-1ch2g6w > .css-1n8mou8').click
        // 
        cy.get('button[linkaction="CORE"]').click()
        cy.get('#checkout_email_or_phone').type(Cypress.env('email'))
        cy.get('.payment-due__price').invoke('text').should('contains', Cypress.env('price'))
    })
  })