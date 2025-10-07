describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')
     cy.get('[id="APjFqb"]').type('testuser')
  })
})