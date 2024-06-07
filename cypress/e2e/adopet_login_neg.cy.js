function login() {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
        statusCode:400,}).as('stubPost')
      })
  }

describe('Página de login', () => {
    login();

    it('Deve preencher os campos do login corretamente e autenticar o usuário', () => {

      cy.get('[data-test="input-loginEmail"]').type('barea6@');
      cy.get('[data-test="input-loginPassword"]').type('1234');
      cy.get('[data-test="submit-button"]').click();
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });

    it('Deve preencher os campos do login corretamente e autenticar o usuário', () => {
      cy.login('ana@email.com', 'Senha123')
      cy.wait('@stubPost')
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
      })

  });