function login() {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
}

describe('Página de login', () => {
    login();

    it('Deve preencher os campos do login corretamente e autenticar o usuário', () => {

      cy.login('barea@gmail.com', 'Senha123456');
    });
  });