describe('App E2E', () => {
  it('shold have a header in main page', () => {
    cy.visit('/')

    cy.get('h3').should('have.text', 'Calculator AppHistory')
  })

  it('should have keys in a keypad', () => {
    cy.contains('0')
    cy.contains('1')
    cy.contains('2')
    cy.contains('3')
    cy.contains('4')
    cy.contains('5')
    cy.contains('6')
    cy.contains('7')
    cy.contains('8')
    cy.contains('9')
  })

  it('checking the input to the display', () => {
    cy.contains('7').click()
    cy.contains('5').click()
    cy.contains('4').click()
    cy.contains('.').click()
    cy.contains('9').click()
    cy.contains('6').click()
    cy.contains('754.96')
  })

  it('checking key C', () => {
    cy.contains('C').click()
    cy.contains('754.9')
  })

  it('checking on error', () => {
    cy.contains('CE').click()
    cy.contains('(').click()
    cy.contains('=').click()
    cy.contains('Ошибка')
  })

  it('check calculator work', () => {
    cy.contains('CE').click()
    cy.contains('7').click()
    cy.contains('*').click()
    cy.contains('2').click()
    cy.contains('+').click()
    cy.contains('3').click()
    cy.contains('=').click()
    cy.contains('17')
  })

  it('check setting link', () => {
    cy.contains('Setting').click()
    cy.location('pathname').should('eq', '/settings')
  })

  it('check change style', () => {
    cy.contains('Setting').click()
    cy.get('select').select('theme/dark')
    cy.get('body').should('have.css', 'background').and('include', 'rgb(61, 62, 65)')
    cy.get('select').select('theme/light')
    cy.get('body').should('have.css', 'background').and('include', 'rgb(255, 255, 255)')
  })
})
