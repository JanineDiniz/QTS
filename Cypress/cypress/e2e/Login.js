describe('Sistema de busca do Google', () => {
  it('E acessa a página do Google', () => {
    cy.visit('https://www.google.com.br')
  })
  it('E ele digite algo no campo de busca', () => {
    cy.get('input[name=q]').type('Shopee')
  })
  it('Quando ele clica em Pesquisa Google', () => {
    cy.get('form').submit()
  })
  it('E acessa a página da Shopee', () => {
    cy.visit('https://www.shopee.com.br/')
  })
  it('E acessa o botão "Entrar"', () => {
    cy.get(locators.ENTRAR.btnEntrar).click()
  })
  cy.get('#input-email').type('nicollye.hernandes.santos@gmail.com')
  cy.get('.senha-class').type('123456@#$Testes')
  it('E acessa o botão "Entrar"', () => {
    cy.get(locators.ENTRAR.btnEntrar).click()
  })
  it('E acessa a página principal', () => {
    cy.visit('https://shopee.com.br/user/purchase/?is_from_login=true')
  })
})