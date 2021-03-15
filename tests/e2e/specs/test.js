// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
      cy.visit('')
      cy.contains('h1', 'Pokémon Cards')
  })

  it('Search Pikachu', () => {
      cy.get('input').type('Pikachu')
      cy.contains('.card', 'Pikachu')
  })

  it('Visits details page', () => {
      cy.get('.card:first').click()
      cy.url().should('include', '/details')
      cy.contains('button', 'Back to list')
  })

  it('Open attack modal', () => {
      cy.get('.list-item.clickable:first').click()
      cy.get('.vm--modal').should('exist')
  })
})
