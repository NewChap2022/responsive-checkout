describe('visit webpage', () => {
  it('successfully load', () => {
    cy.visit('/')
  })    
  it('the logo is clickable', () => {
    cy.get('div').find('header').find('div').find('div').find('div').find('a').click()
  })
})
