describe('template spec', () => {
  it.skip('Caso de teste 1', () => {
    cy.site()
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName-label').should('contain.text', 'Full Name')
  })

  it.skip('Caso de teste 2 - negativo', () => {
    cy.site()
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName-label').should('contain.text', 'NÃO EXISTE ESSE TEXTO')
  })

  it('Caso de teste 3', () => {
    teste2()
})
})

function teste2(){
    cy.site()
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
    cy.get('.rct-checkbox').click()
    cy.get('#result > :nth-child(2)').should('contain.text', 'home' )
}