describe('Pokedex', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('front page can be opened', () => {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('ivysaur can be navigated to', () => {
    cy.contains('ivysaur').click()
    cy.contains('speed')
    cy.contains('special defense')
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })

})
